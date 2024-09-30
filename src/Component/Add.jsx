import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Add(){

    let navigate = useNavigate();

    const[user, setUser] = useState({
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

    const handleSubmit = (event) => {

        event.preventDefault();

        fetch('http://localhost/React-PHP/app/api/action.php', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then((response) => response.json())
        .then((data) => {
            navigate("/");
        })
    };

    return(
        <div className=" card">
            <div className=" card-header">
                <div className=" row">
                    <div className=" col-md-6">User Data</div>
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
                                <input type="text" name="Firstname" className="  form-control" onChange={handleChange}/>
                            </div>
                            <div className=" mb-3">
                                <label>Last Name</label>
                                <input type="text" name="Lastname" className="  form-control" onChange={handleChange}/>
                            </div><div className=" mb-3">
                                <label>Email</label>
                                <input type="text" name="Email" className="  form-control" onChange={handleChange}/>
                            </div>
                            <div className=" mb-3">
                                <input type="submit" className=" btn btn-primary" value="Add"/>
                            </div>
                        </form>
                    </div> 
                </div>                         
            </div>
        </div>
    )
}

export default Add;