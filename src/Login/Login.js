import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Form, Button, Image, Container, Alert} from "react-bootstrap";
import "./login.css";



const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let { signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signInUser(username, password)
      .then(() => {
        navigate("/recipes/saved");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed login");
      });
  }

//   return (
//     <form>
//       <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
//       <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />

//       <MDBRow className='mb-4'>
//         <MDBCol className='d-flex justify-content-center'>
//           <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
//         </MDBCol>
//         <MDBCol>
//           <a href='#!'>Forgot password?</a>
//         </MDBCol>
//       </MDBRow>

//       <MDBBtn type='submit' block>
//         Sign in
//       </MDBBtn>
//     </form>
//   );
// }

//   return (
//     <Form className="Login">
//         <div className="img-fluid">
        
//       <Container>
//         {/* Username */}
//         <Form.Group className="Username" controlId="formBasicEmail">
//           <Form.Label text-color="Black">Username</Form.Label>
//           <Form.Control type="Text" placeholder="Username" />
//         </Form.Group>

//         <br />
//         <br />

//         {/* Password */}
//         <Form.Group className="Password" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control className="position-sticky start-25" type="password" placeholder="Password" />
//         </Form.Group>

//         <br />
//         <br />

//         {/* Button */}
//         <Button className="position-absolute start-50" variant="success" type="submit">
//           Submit
//         </Button>

//         <br />
//         <br />

//         <Image
//           className=""
//           src="https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
//           width="30%"
//           alt=""
//         ></Image>
//       </Container>
//       </div>
//     </Form>
//   );
// };

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
}

export default SignIn;
