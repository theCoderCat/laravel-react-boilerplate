import { Link } from "react-router-dom";
export default function Error404() {
    return (
        <main className="content container-fluid p-3">
            the dog ate this page, <Link to="/">go back</Link>
        </main>
    )
}