import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

import {compactSidebarState} from "../store";
import {useRecoilState} from "recoil";
import { wrapGrid } from 'animate-css-grid';
import { useEffect } from "react";

export default function Root() {
    const [compactSidebar, setCompactSidebar] = useRecoilState(compactSidebarState);
    useEffect(() => {
        const grid = document.querySelector("#app-container");
        wrapGrid(grid);
    }, []);
    return (
        <div id="app-container" className={compactSidebar ? 'compact-sidebar' : ''}>
            <Header/>
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
