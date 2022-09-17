import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [signInWithEmailAndPassword,user,error,loading] = useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user){
      
        navigate(from, { replace: true });
    }

    const handleEmailChange=(event) =>{
        setEmail(event.target.value)
    }
    const handlePasswordChange=(event) =>{
        setPassword(event.target.value)
    }


  const handleUserSignIn = event =>{
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }

    signInWithEmailAndPassword(email, password)
    setValidated(true);
    
}
    return (
        <Form className='w-50 mx-auto' noValidate validated={validated} onSubmit={handleUserSignIn}>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control onBlur={handleEmailChange} type="email" placeholder="Your Email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
       {/*  <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group> */}
        <p className='text-danger'>{error.message}</p>
        {
            loading && <p>loading......</p>
        }
        <Button  type="submit">Sign Up</Button>
        <p className='text-warning'>New in sky device shop? Create a new Account? <Link to='/signup'>Sign Up</Link></p>
      </Form>
    );
};

export default Login;