import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import "./signUp.css";
import { ThemeProvider } from 'react-bootstrap';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(username, password, firstName, lastName).then(() => {
            navigate('/login');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }

    return (
        <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
 
        <div>
            
        <form className='form' onSubmit={handleSubmit}>
            <div class="d-flex justify-content-center"></div>
            <h1 className='heading'>REGISTER</h1>
            <br></br><br></br>
            <span>Username  </span>
            <input placeholder="Enter Email" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            <br></br><br></br>
            <span>Password  </span>
            <input placeholder="Enter Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <br /><br></br>
            <span>First Name  </span>
            <input placeholder="Enter First Name" type="text" name="first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <br /><br></br>
            <span>Last Name  </span>
            <input placeholder="Enter Last Name" type="text" name="last name" value={lastName} onChange={e => setLastName(e.target.value)} />
            <br /><br></br>
            <button>Sign Up</button>
            <br></br>
            <br></br>
            <br></br>
            <div class="col-8" className="center">
                    <img src="https://images.unsplash.com/photo-1582138079863-ec3e671f59d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80" width="100%"></img>
            </div>  
        </form>
        
        <hr />
        </div>
        </ThemeProvider>
    )
};

export default SignUp;



