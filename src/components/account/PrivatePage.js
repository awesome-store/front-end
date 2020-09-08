import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PrivatePage() {
    const [namekek, setNamekek] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('Ololo', namekek)
    }, [namekek]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const options = {
            headers: {
                authorization: token
            }
        };

        axios.get('https://aw-store.herokuapp.com/auth/users', options)
            .then(res => {
                // console.log(res);
                // console.log(res.data[0].email);
                setUsers(res.data);
                // console.log(namekek);
            })
            .catch(err => { console.log(err)} )
    }, []);

    

    return (
        <div>
            {
                users.map((user, index) => {
                    return (
                        <p>{ user.email }</p>
                    )
                })
            }
        </div>
    )
}

export default PrivatePage;