import React, {useState} from "react";
import { Link } from "react-router-dom";

function App(){
    const[user, setUser] = useState({
        Firstname : '',
        Lastname : '',
        Email : '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target; 

        setUser({
            ...user,
            [name] : value
        });
    };

    return(
        <div>
            <div>
                <div>
                    <div></div>
                    <div>

                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )

}