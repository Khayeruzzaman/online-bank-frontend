import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './login.module.css';

const Login = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[errmsg, setErrmsg] = useState([]);

    useEffect(() => {
        document.title = "Login/SignUp"
      }, [])

    const loginAttempt = async (e) => {
        e.preventDefault();

        var obj = {username: username, password: password};
        const response = await axios.post("http://127.0.0.1:8000/api/apilogin", obj);
        console.log(response);
        if(response.data.validation_error){
            setErrmsg(response.data.validation_error);
            console.log(errmsg);
        }
        else{
            
        }
    }
    
    return(
        <div className={styles.bodydiv}>
            <form onSubmit={loginAttempt}>
            <div className={styles.Loginform}>
                
                <center>
                <h3 style={{ fontSize: '26px', color: '#063146' }}>Banking is now at your Doorstep!</h3>
                </center>
                <br />
                    <input type="text" name="username" onChange={(event)=>setUsername(event.target.value)} placeholder="Enter your Username" value={username} />
                    <span class="text text-danger" id="validation_msg">{errmsg.username}</span>
                    <br />
                    <br />
                
                    <input type="password" name="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Enter your Password" value={password} />
                    <span class="text text-danger" id="validation_msg">{errmsg.password}</span>
                    <br />
                    <br />
                    <button id="submit" type="submit" onClick={loginAttempt} >LOGIN </button>
                    <br />
                    <br />
                    <center>
                    <span className="text text-info" id="register">Don't have an account? <a href="">Create One!</a></span>
                    </center>
                </div>
            </form>
            
        </div>
    );
}
export default Login;