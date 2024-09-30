import React, { useEffect, useState } from "react";

function Userlist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost/CRUD-REACT-PHP/APP/api/action.php'; 

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []); 
    
    return (
        <div className="">
            <div className=" ">
                <div className="card-header">
                    <div className="row">
                        <div className=""><b>User Data</b></div>
                        <div className=""></div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <table className="m-3 w-11/12">
                        <thead className="text-left p-10">npm 
                            <tr>
                                <th className="">First Name</th>
                                <th className="">Last Name</th>
                                <th className="">Email</th>
                                <th className="">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>    
                                    <td className="">{user.Firstname}</td>
                                    <td className="border-zinc-400 border border-solid pl-2">{user.Lastname}</td>
                                    <td className="border-zinc-400 border border-solid pl-2">{user.Email}</td>
                                    <td className="border-zinc-400 border border-solid pl-2"></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
    );
}

export default Userlist;
