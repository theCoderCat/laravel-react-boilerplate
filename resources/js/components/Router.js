import { HashRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Example from "./Example";
import Example2 from "./Example2";
import Error404 from "./Error404";
import Page from "./Page";
import ChildExample from "./ChildExample";
const routes = [
    {
        path: "/",
        component: Root,
        title: "App",
        children: [
            {
                index: true,
                // path: "",
                component: Example,
                title: "Example"
            },
            {
                path: "example-2",
                component: Example2,
                title: "Example 2",
                children: [
                    {
                        path: "smaller-example",
                        component: ChildExample,
                        title: "Example 3"
                    }
                ]
            }
        ]
    }
];

// return a route node with all of its  children, and grandchildren too, if any
const routeWithChildren = (r, parentPath) => {
    const key = [parentPath ? parentPath : "", r.path].join("/");
    return (
        <Route path={r.path} element={<Page title={r.title} component={r.component} />} key={key} index={r.index}>
            {/* only render children route nodes if children key has value */}
            {r.children && r.children.map(c => routeWithChildren(c))}
        </Route>
    )
}

export const menu = [
    {
        path: "/",
        name: "Example",
        icon: "book"
    },
    {
        path: "/example-2",
        name: "Example 2",
        icon: "book"
    },
    {
        path: "/example-2/smaller-example",
        name: "Example 3",
        icon: "book"
    },
]

export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                {routes.map(r => routeWithChildren(r))}
                <Route path="*" element={<Page component={Error404} title="Not found" />} />
            </Routes>
        </HashRouter>
    );
}