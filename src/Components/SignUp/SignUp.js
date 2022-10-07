import React from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const [ createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const navigate=useNavigate();
    console.log(email,password)

    if(user){
        navigate('/home');
    }

    const handleEmailChange=(event) =>{
        setEmail(event.target.value)
    }
    const handlePasswordChange=(event) =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordChange=(event) =>{
        setConfirmPassword(event.target.value)
    }

  const handleCreateUser = event =>{
    const form = event.currentTarget;
    console.log(form)
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }

    if(password !== confirmPassword){
        setError('Your two password not match')
        return;
    }
    if(password.length<6){
        setError('Password must be 6 character')
        return;
    }
    
    
    createUserWithEmailAndPassword(email,password);
    setError('');
    setValidated(true);
}
  return (
    <Form className='w-50 mx-auto' noValidate validated={validated} onSubmit={handleCreateUser}>

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
        <Form.Group as={Col} md="12" controlId="validationCustom05">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onBlur={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Confirm Password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <p className='text-danger'>{error}</p>
      <Button  type="submit">Sign Up</Button>
      <p className='text-warning'>Already Have an Account? <Link to='/login'>Login</Link></p>
    </Form>
  );
};

export default SignUp;