import { useEffect, useState } from "react";

function Comments({ id }) {
    const [coms, setComs] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(res => res.json())
            .then((data => {
                setComs(data)
            }));
    }, [])
    return (<>
        {coms.length > 0 && <table className="table table-danger table-hover table-bordered">
            <thead>
                <tr>
                    <th>Post Id</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {coms.map((elm, i) => <tr key={i}>
                    <td>{elm.postId}</td>
                    <td>{elm.id}</td>
                    <td>{elm.name}</td>
                    <td>{elm.email}</td>
                    <td>{elm.body}</td>
                </tr>)}
            </tbody>
        </table>}
    </>)
}

export default Comments