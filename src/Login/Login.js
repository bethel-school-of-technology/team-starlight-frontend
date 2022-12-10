import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        signInUser(username, password).then(() => {
            navigate('/recipes/saved');
            
        }).catch(error => {
            console.log(error);
            window.alert('Failed login');
        });
    }

    return (
      <div>
        <form className='form' onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <span>Username  </span>
            <input placeholder="Enter email" type="text" name="username" onChange={e => setUsername(e.target.value)} />
            <br></br><br></br>
            <span>Password  </span>
            <input placeholder="Enter password" type="password" name="password" onChange={e => setPassword(e.target.value)} />
            <br /><br></br>
            <button>
                Sign In
            </button>
            <br></br>
            <br></br>
            <br></br>
            <div class="col-8" className="center">
                    <img src="https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" width="100%" alt=""></img>
            </div>       
        </form>
        <hr />
        </div>
    );
};

export default SignIn;