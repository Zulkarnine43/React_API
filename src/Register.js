import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';
function Register()
{
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history=useHistory();

    useEffect(() => {
       
        if(localStorage.getItem("user-info"))
        {
            history.push('/add');
        }
    }, [])
   
    async function signUp()
    {
        let item={name,email,password};
        //console.warn(item);

        let result=await fetch("http://localhost/apiLearn/public/api/register",{
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(item)
        })
        result = await result.json();
        console.warn("result",result);
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push('/add');
    }
    
    return (
        <>
             <Header/>
            <div class="col-md-6 offset-md-3" >
                <h1>User Signup</h1>
                <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} className='form-control'/>
                <br/>
                <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
                <br/>
                <input type="text" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className='form-control'/>
                <br/>
                <button onClick={signUp} className="btn btn-primary">Signup</button>
            </div>
        </>
    )
    
}
export default Register;