import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./Firebase";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                navigate('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/');
                }
            })
            .catch(error => alert(error.message))
    } 

    return (
        <div className='login'>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={ e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <button onClick={register} className="login__registerButton">Create your account</button>
            </div>

        </div>
    )
}

export default Login;
