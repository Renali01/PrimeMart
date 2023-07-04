import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(' ');

    const signIn = e => {
        e.preventDefault();
        // firebase
    }

    const register = e => {
        e.preventDefault();
        // firebase
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

                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>

                <button onClick={register}/>
                <button className="login__registerButton">Create your account</button>
            </div>

        </div>
    )
}

export default Login
