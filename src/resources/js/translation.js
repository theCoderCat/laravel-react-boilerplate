// this set up is compatible with laravel's translation layer, feel free to modify this code to point to different source of dictionary

import ja from './lang/ja.json';
const dictionaries = {
	ja,
	en: {}
};

const lang = document.documentElement.lang ?? 'ja';
const dict = dictionaries[lang] ?? dictionaries['ja'];

export default function $t(message, parameters) {
	var msg = dict[message] ? dict[message] : message;
	if (parameters != undefined) {
		if (typeof parameters == 'object') {
			for (const key in parameters) {
				const param = parameters[key];
				const translatedParam = $t(param);
				let regex = new RegExp(`:${key}`, "g");
				msg = msg.replace(regex, translatedParam);
			}
		}
	}
	
	return msg;
}