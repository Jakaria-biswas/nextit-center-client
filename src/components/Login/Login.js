import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {


    const navigate = useNavigate()

    const handleLogin = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if (username == "jakaria" && password == 'test') {
            navigate('/dashboard', { replace: true })

        } else {
            alert('not valid your information')
        }



    }
    return (
        <div className='container'>

            <div className='pt-5'>
                <h2 className='text-center pt-5'>Go to dashboard</h2>
                <div className='d-flex justify-content-center'>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="username" placeholder="user name" required />
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="password" placeholder="password" required />
                    </div>
                </div>

                <div className='d-flex justify-content-center'>
                    <button onClick={handleLogin} className='l-btn'>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;