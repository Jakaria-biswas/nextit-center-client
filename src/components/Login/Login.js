import React from 'react';
import {Navigate, useNavigate} from  'react-router-dom';
const Login = () => {


const navigate = useNavigate()

    const handleLogin = () => {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
         
        if(username == "jakaria" && password == 'test' ){
            navigate('/dashboard', {replace:true})
               
        }else{
              alert('not valid your information')
        }
             
             

    }
    return (
        <div className='container'>
            <h2 className='text-center pt-5'>Go to dashboard</h2>
            <div className='d-flex justify-content-center'>
                <div class="input-group flex-nowrap w-25">
                    <span class="input-group-text" id="addon-wrapping">U</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <br />
            <div className='d-flex justify-content-center'>
                <div class="input-group flex-nowrap w-25">
                    <span class="input-group-text" id="addon-wrapping">P</span>
                    <input type="password" class="form-control" id="password" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <br/>
            <div className='d-flex justify-content-center'>
                <button onClick={handleLogin} className='btn btn-success'>Login</button>
            </div>

        </div>
    );
};

export default Login;