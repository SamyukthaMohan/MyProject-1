import React from 'react'
import { useState } from 'react';
function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const formHandler=(event)=>
    {
        event.preventDefault();
        const loginObj={
            name:userName,
            pwd:password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
    }
  return (
    <div>
    <h3>Login</h3>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={userName} placeholder="UserName" onChange={(event)=>setUserName(event.target.value)}/><br/>
    Password : <input type="password"  value={password} placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/><br/>
    <button type="submit">Login</button>


    </form>
    </div>
  )
}

export default Login