import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Edit(){

    let navigate = useNavigate();

    const {user_id} = useParams();

    const [ user, setUser] = useState({
        Firstname : '',
        Lastname : '',
        Email : ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target; 

        setUser({
            ...user,
            [name] : value
         });
    };

    const fetchUserData = () => {
        fetch(`http://localhost/React-PHP/app/api/action.php?ID=${user_id}`)
        .then((response) => response.json())
        .then((data) => {
            setUser(data);
        });
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleSubmit = (event) => {

        event.preventDefault();

        fetch(`http://localhost/React-PHP/app/api/action.php?ID=${user_id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data) => {
            navigate("/");
        });
    };

    return ( 
        <div className=" card">
            <div className=" card-header">
                <div className=" row">
                    <div className=" col-md-6">Edit User</div>
                    <div className=" col-md-6">
                        <Link to="/" className=" btn btn-success btn-sm float-end">View All</Link>
                    </div>
                </div>
            </div>
            <div className=" card-body">
                <div className=" row">
                    <div className=" col-md-4">&nbsp;</div>
                    <div className=" col-md-4">
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className=" mb-3">
                                <label>First Name</label>
                                <input type="text" name="Firstname" className="  form-control" value={user.Firstname} onChange={handleChange}/>
                            </div>
                            <div className=" mb-3">
                                <label>Last Name</label>
                                <input type="text" name="Lastname" className="  form-control" value={user.Lastname} onChange={handleChange}/>
                            </div><div className=" mb-3">
                                <label>Email</label>
                                <input type="text" name="Email" className="  form-control" value={user.Email} onChange={handleChange}/>
                            </div>
                            <div className=" mb-3">
                                <input type="submit" className=" btn btn-primary" value="Save"/>
                            </div>
                        </form>
                    </div> 
                </div>                         
            </div>
        </div>
    )
}

export default Edit;