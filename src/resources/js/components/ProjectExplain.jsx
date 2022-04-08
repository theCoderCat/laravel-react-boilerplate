const dependencies = [
    {
        name: "React",
        link: "https://reactjs.org/",
        description: "react official website"
    },
    {
        name: "Recoil",
        link: "https://recoiljs.org/",
        description: "react's state management library"
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/docs/5.0/getting-started/introduction/",
        description: "css framework"
    },
    {
        name: "Shoeslace",
        link: "https://shoelace.style/",
        description: "High quality web components, have react implementation"
    },
    {
        name: "BlueprintJs",
        link: "https://blueprintjs.com/",
        description: "High quality react components"
    },
    {
        name: "React Router",
        link: "https://reactrouter.com/docs/en/v6",
        description: "React router official website"
    },
    {
        name: "Animate CSS Grid",
        link: "https://github.com/aholachek/animate-css-grid",
        description: "Library to animate grid elements"
    },
];

const components = [
    {
        name: "Awesome components list",
        link: "https://github.com/enaqx/awesome-react#react-awesome-components",
        description: "A currated list of good react components from community"
    }
];

import Iframe from "./Iframe";
import React from "react";

class ProjectExplain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iframeOpened: false,
            iframeUrl: null,
        };
    }

    linkClickHandler(e, url) {
        e.preventDefault();
        this.setState({ iframeOpened: true, iframeUrl: url });
    }

    render() {
        return (
            <div className="container-fluid row">

                <div className={this.state.iframeOpened ? 'col-4' : 'col-12'}>
                    <h1 id="overview">Overview</h1>
                    <p>This project has been built based on Laravel's UI (<a href="https://github.com/laravel/ui">https://github.com/laravel/ui</a>) reactjs preset.</p>
                    <h1 id="dev-environment">Dev environment</h1>
                    <ul>
                        <li><a href="https://nodejs.org/en/">nodejs/npm (version 16.14.1 LTS as of time of writing this guide)</a></li>
                    </ul>
                    <h1 className="d-flex align-items-center">Dependencies</h1>
                    <ul>
                        {dependencies.map(d => (
                            <li key={d.link}>
                                <a href={d.link} target="_blank" onClick={(e) => this.linkClickHandler(e, d.link)}>{d.name}</a>
                                <span className="small text-muted ms-2">{d.description}</span>
                            </li>
                        ))}
                    </ul>

                    <h1 className="d-flex align-items-center">Components Library</h1>
                    <ul>
                        {components.map(d => (
                            <li key={d.link}>
                                <a href={d.link} target="_blank">{d.name}</a>
                                <span className="small text-muted ms-2">{d.description}</span>
                            </li>
                        ))}
                    </ul>
                    <h1 id="how-to-run">How to run</h1>
                    <ul>
                        <li>install nodejs/npm</li>
                    </ul>
                    <h2 id="run-with-hot-reload-browser-auto-reload-assets-everytime-you-make-changes">run with hot reload (browser auto reload assets everytime you make changes)</h2>
                    <ul>
                        <li>open cmd and run following command</li>
                    </ul>
                    <pre><code><code><div>cd path/to/project
                        npm install
                        npm run hot
                    </div></code></code></pre>
                    <ul>
                        <li>open another cmd and run following command</li>
                    </ul>
                    <pre><code><code><div>cd path/to/project
                        npm run web-sever
                    </div></code></code></pre>
                    <ul>
                        <li>open web browser and access <a href="http://localhost:3000"><code>http://localhost:3000</code></a></li>
                    </ul>
                    <h2 id="run-with-watch-assets-will-be-compiled-automatically-but-you-will-have-to-refresh-browser-manually-to-see-changes">run with watch (assets will be compiled automatically but you will have to refresh browser manually to see changes)</h2>
                    <ul>
                        <li>open cmd and run following command</li>
                    </ul>
                    <pre><code><code><div>cd path/to/project
                        npm install
                        npm run watch
                    </div></code></code></pre>
                    <ul>
                        <li>open <code>public/index.html</code> and modify <code>line 13</code> and <code>line 18</code>, change <code>//localhost:8080</code> into <code>//localhost</code></li>
                        <li>open another cmd and run following command</li>
                    </ul>
                    <pre><code><code><div>cd path/to/project
                        npm run web-sever
                    </div></code></code></pre>
                    <ul>
                        <li>open web browser and access <a href="http://localhost:3000"><code>http://localhost:3000</code></a></li>
                    </ul>
                    <h1 id="create-new-pages-and-components">Create new pages and components</h1>
                    <ul>
                        <li>new page will be registered in <code>resources/js/Router.jsx</code>, component file for page will be created in <code>resources/js/</code></li>
                        <li>please refer to other components and official documentation to know how to compose new components</li>
                    </ul>
                    <h1 id="styles">Styles</h1>
                    <ul>
                        <li>since all major browsers support css variable (custom property) natively, please refrain from using sass's variable and use native variable whenever possible</li>
                        <li>refer to <code>_variables.scss</code> and other <code>.scss</code> file to know how to define and use css variables</li>
                    </ul>
                    <h1 id="note">Notes</h1>
                    <ul>
                        <li>when incorporate with other back-end like laravel, there's no need to keep <code>public/web-server.js</code>, this one only serve the purpose of standalone front-end dev workflow</li>
                    </ul>
                </div>

                {this.state.iframeOpened &&
                    <div className="col-8">
                        <Iframe url={this.state.iframeUrl}></Iframe>
                    </div>
                }
            </div>
        );
    }
}

export default ProjectExplain;