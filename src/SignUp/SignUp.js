import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import "./signUp.css";

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
    )
};

export default SignUp;


// import React, { useReducer } from "react";
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import { propTypes } from "react-bootstrap/esm/Image";
// import { useState } from "react";
// import "./signUp.css";
// import { useForm } from "react-hook-form";

// function SignUp() {
//     const [firstName, setFirstName] = useState(null);
//     const [lastName, setLastName] = useState(null);
//     const [email, setEmail] = useState(null);
//     const [password,setPassword] = useState(null);
//     const [confirmPassword,setConfirmPassword] = useState(null);

//     const handleInputChange = (e) => {
//         const {id , value} = e.target;
//         if(id === "firstName"){
//             setFirstName(value);
//         }
//         if(id === "lastName"){
//             setLastName(value);
//         }
//         if(id === "email"){
//             setEmail(value);
//         }
//         if(id === "password"){
//             setPassword(value);
//         }
//         if(id === "confirmPassword"){
//             setConfirmPassword(value);
//         }

//     }

//     const handleSubmit  = () => {
//         console.log(firstName,lastName,email,password,confirmPassword);
//     }
//     // let [user, setUser] = useState({
//     //     firstName: "",
//     //     lastName: "",
//     //     email: "",
//     //     Password: ""
//     // });

//     // let {firstName, lastName, email, password} = user

//     // function handleChange(e) {
//     //     setUser({...user, [e.target.firstName]: e.target.value})
//     // }

//     // function handleSubmit(e) {
//     //     e.preventDefault() 
//     //     props.onNewUser(user)
//     // }
//     return (
//         <>
//         <div className="form">
//             <div className="form-body">
//                 <div className="username">
//                     <label className="form__label" for="firstName">First Name </label>
//                     <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
//                 </div>
//                 <div className="lastname">
//                     <label className="form__label" for="lastName">Last Name </label>
//                     <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
//                 </div>
//                 <div className="email">
//                     <label className="form__label" for="email">Email </label>
//                     <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
//                 </div>
//                 <div className="password">
//                     <label className="form__label" for="password">Password </label>
//                     <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
//                 </div>
//                 <div className="confirm-password">
//                     <label className="form__label" for="confirmPassword">Confirm Password </label>
//                     <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
//                 </div>
//             </div>
//             <div class="footer">
//                 <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
//             </div>
//         </div>
       
//         {/* <h1>Create Account</h1>
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" >
//             <Form.Label>First Name</Form.Label>
//             <Form.Control type="text" name="name" value={user.firstName} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" >
//             <Form.Label>Last Name</Form.Label>
//             <Form.Control type="text" name="name" value={user.lastName} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" >
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="text" name="email" value={user.email} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group className="mb-3" >
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="text" name="password" value={user.password} onChange={handleChange} />
//             </Form.Group>
//             <div className="container">
//             <div className="center">
//             <Button type="submit" onClick={handleSubmit} className="button">Submit</Button>
//             </div>
//             </div>
//         </Form> */}
//       </>
//     )
// }

// export default SignUp