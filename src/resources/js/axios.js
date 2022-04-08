import axios from 'axios';
import $t from './translation';
import apiEndpoints from './api-endpoints';

let API_HOST = '';
import _ from 'lodash';

Object.assign(axios.defaults.headers.common, {
    'X-Requested-With': 'XMLHttpRequest'
});

axios.requestInstances = {};
axios.defaults.baseURL = API_HOST;

axios.interceptors.response.use(
    function (response) {
        // check to see if the request has cancel function waiting and remove
        axios.removeCancelFunction(response.config.apiName);
        return response;
    },
    function (error) {
        if (error.response) {
            // check to see if the request has cancel function waiting and remove
            axios.removeCancelFunction(error.response.config.apiName);
        }

        if (error.response && error.response.status == 401) {
            console.error('Unauthenticated user. Logout!')
            store.commit('logout');
        }

        // return error;
        if (!error.response || !error.response.data) {
            error.response = {
                data: {
                    result: {
                        message: $t("Error! Please check you internet connection and try again."),
                        success: false
                    },
                    data: null
                }
            }
        }
        return Promise.reject(error);
    }
);

axios.getEndpoint = function (name, routeParams) {
    const routeObject = apiEndpoints[name];
    if (!routeObject) {
        console.error("API named '" + name + "' not found");
        return null;
    }

    let _ro = _.cloneDeep(routeObject);
    _ro.apiName = name;

    if (routeParams != undefined && typeof routeParams == 'object') {
        let url = _ro.url;
        for (const key in routeParams) {
            const param = routeParams[key];
            let regex = new RegExp(`{${key}}`, "g");
            url = url.replace(regex, param);
        }
        _ro.url = url;
    }

    return _ro;
}

axios.generateCancellableApi = function(apiName, routeParams) {
    const CancelToken = axios.CancelToken;
    const api = this.getEndpoint(apiName, routeParams);
    api.cancelToken = new CancelToken(function executor(c) {
        // An executor function receives a cancel function as a parameter
        axios.requestInstances[apiName] = {
            cancel: c
        }
    });

    return api;
}

axios.cancelPreviousRequest = function(apiName) {
    return new Promise(async (resolve) => {
        const _cancel = (name) => {
            if (this.requestInstances[name]) {
                this.requestInstances[name].cancel(['cancel previous', name, 'request'].join(" "));
                this.requestInstances[name] = null;
            }
        }

        if (typeof apiName == 'string') {
            _cancel(apiName);
        }
        else if (typeof apiName == 'object') {
            apiName.forEach((name) => {
                _cancel(name);
            });
        }

        // a hack to make sure the previous api call is properly cancelled before making new call
        await new Promise(rslv => setTimeout(rslv, 1));

        resolve(true);
    });
}

axios.removeCancelFunction = function(apiName) {
    if (this.requestInstances[apiName]) {
        delete this.requestInstances[apiName];
    }
}
export default axios;
window.axios = axios;
