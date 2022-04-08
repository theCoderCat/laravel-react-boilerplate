import axios from "../axios";
import $t from "../translation";
import useInput from "./Input";
import { useState } from "react";

function ExampleUserList() {
    const [users, setUsers] = useState([]);

    function fetchUser(conditions, evt) {
        evt.preventDefault();
    
        const api = axios.getEndpoint('users');
        api.params = conditions;
        axios(api)
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => {
                alert('something went wrong!');
                console.error(err)
            })
            .then(() => {})
    
    }

    const [username, userInput] = useInput({ type: "text", label: "Username" });
    const [email, emailInput] = useInput({ type: "email", label: "Email" });
   
    return (
        <div className="container-fluid">
            <form onSubmit={(e) => fetchUser({username, email}, e)}>
                {userInput}
                {emailInput}
                <button className="mt-2 btn btn-primary" type="submit">{$t('Submit')}</button>
            </form>
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Bio</th>
                            <th>Created date</th>
                            <th>Updated date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.bio}</td>
                                    <td>{user.created_at}</td>
                                    <td>{user.updated_at}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ExampleUserList;
