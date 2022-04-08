import { NavLink } from "react-router-dom";
import { menu } from "./Router";
import { SlIcon } from "@shoelace-style/shoelace/dist/react";
import React from "react";
import {compactSidebarState} from "../store";
import {useRecoilState} from "recoil";

export default function Sidebar() {
    const [compactSidebar, setCompactSidebar] = useRecoilState(compactSidebarState);

    return (
        <nav className={`nav sidebar ${compactSidebar ? 'compact' : ''}`}>
            <ul>
                {menu.map(m => (
                    <li className="nav-item" key={m.path}>
                        <NavLink to={m.path} className="nav-link">
                            {m.icon && <SlIcon name={m.icon} className="icon me-3" />}
                            {m.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
