import { useEffect, useState } from "react";
import Comments from "./Comments";

function Posts({ id }) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(res => res.json())
            .then((data => {
                setPosts(data)
            }));
    }, [])
    const seeComs = (id) => {
        setPosts(
            posts.map(elm => {
                if (elm.id === id) {
                    elm.showCom = !elm.showCom
                }
                return elm
            })
        )
    }
    return (<>
        {posts.length > 0 ? <table className="table table-dark table-hover table-bordered">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((elm, i) => <tr key={i}>
                    <td>{elm.userId}</td>
                    <td>{elm.id}</td>
                    <td>{elm.title}</td>
                    <td>{elm.body}</td>
                    <td><button onClick={() => seeComs(elm.id)} className="btn btn-danger">{elm.showCom ? "Close" : "See Comments"}</button>
                        {elm.showCom && <Comments
                            id={elm.id}
                        />}
                    </td>
                </tr>)}
            </tbody>
        </table> : <h1>...</h1>}
    </>)
}

export default Posts