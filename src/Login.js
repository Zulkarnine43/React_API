import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from './Header';
function Login() {
    const history = useHistory();
    useEffect(() => {

        if (localStorage.getItem("user-info")) {
            history.push('./add');
        }
    }, [])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [state, setstate] = useState(initialState)

    async function signin() 
    {
        let item = { email, password };
        let result = await fetch("http://localhost/apiLearn/public/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })
        result = await result.json();
        console.warn(result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push('/add');    
    }

    return (
        <>
            <Header />
            <div class="col-md-6 offset-md-3" >
                <h1>User Login</h1>

                <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className='form-control' />
                <br />
                <input type="text" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className='form-control' />
                <br />
                <button onClick={signin} className="btn btn-primary">Login</button>
            </div>
        </>

    )

}
export default Login;