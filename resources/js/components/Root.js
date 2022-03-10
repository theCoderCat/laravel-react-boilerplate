import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Root() {
    return (
        <>
            <Header/>
            <Sidebar />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
}
