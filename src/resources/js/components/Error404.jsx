import { Link } from "react-router-dom";
export default function Error404() {
    return (
        <main className="content container-fluid p-3">
            <div>
                <h1>404</h1>
                <div>
                    the dog ate this page, <Link to="/">go back</Link>
                </div>
            </div>
        </main>
    )
}