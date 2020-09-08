import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

function PrivatePage() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    // useEffect(() => {
    //     console.log('Ololo', namekek)
    // }, [namekek]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const options = {
            headers: {
                authorization: token
            }
        };

        axios.get('https://aw-store.herokuapp.com/auth/users', options)
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(err => {
                if (err.response.status === 401) {
                    history.push("/login");
                }
                // console.log(err)
                // console.log(err.response);
            })
    }, []);

    

    return (
        <div>
            {
                users.map((user, index) => {
                    return (
                        <div style={{
                            border: "1px solid black", marginBottom: "1rem",
                            padding: "1rem",
                            fontSize: "2rem"
                            }}>
                            <p>{ user.name }</p>
                            <p>{ user.email }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PrivatePage;