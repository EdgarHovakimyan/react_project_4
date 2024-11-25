import { useEffect, useState } from "react";
import Posts from "./Posts";
import Comments from "./Comments";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            });
    }, [])
    const seePosts = (id) => {
        setUsers(
            users.map(elm => {
                if (elm.id === id) {
                    elm.showPost = !elm.showPost
                }
                return elm
            })
        )
    }

    return (<>
        {users.map((elm, i) => <div className="card" key={i}>
            <div className="card-body">
                <h4 className="card-title">{elm.name} {elm.username}</h4>
                <p className="card-text">{elm.email}</p>
            </div>
            <button onClick={() => seePosts(elm.id)} className="btn btn-success">{elm.showPost ? "Close" : "See Post"}</button>
            {elm.showPost && <Posts
                id={elm.id}
            />}
        </div>)}
    </>)
}
export default Users