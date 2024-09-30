import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Userlist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost/React-PHP/app/api/action.php'; 

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
    }, []); 

    const handleDelete = (user_id) => {
        if(confirm("Are you sure you want to delete it?"))
        {
            fetch(`http://localhost/React-PHP/app/api/action.php?ID=${user_id}`, {
                method : 'DELETE'
            })
            .then((response) => response.json())
            .then((data) => {
                setUsers((prevUser) => prevUser.filter((user) => user.ID !== user_id));
            });
        }   
    };
    
    return ( 
        <div className=" card" >
        <div className=" card-header">
            <div className=" row">
                <div className=" col-md-6"><b>User Data</b></div>
                <div className=" col-md-6">
                    <Link to="/add" className=" btn btn-success btn-sm float-end">Add</Link>
                </div>
            </div>
        </div>
        <div className=" card-body">
            <table className=" table table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>    
                            <td>{user.Firstname}</td>
                            <td>{user.Lastname}</td>
                            <td>{user.Email}</td>
                            <td>
                                <Link to={`/edit/${user.ID}`} className="btn btn-warning btn-sm">Edit</Link>
                                &nbsp;
                                <button type="button" onClick={() => handleDelete(user.ID)} className=" btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    );
}

export default Userlist;
