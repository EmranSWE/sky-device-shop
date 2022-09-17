import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [validated, setValidated] = useState(false);
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');

    const handleNameChange=(event) =>{
        setName(event.target.value)
    }
    const handleAddressChange=(event) =>{
        setAddress(event.target.value)
    }
    const handlePhoneChange =(event)=>{
        setPhone(event.target.value)
    }

  const handleCreateUser = event =>{
    const form = event.currentTarget;
    const shipping={email,name,address,phone}
    event.preventDefault();
    if (form.checkValidity() === false) {
        event.stopPropagation();
    }
    setValidated(true);
    console.log(shipping)
}
    return (
        <Form className='w-50 mx-auto' noValidate validated={validated} onSubmit={handleCreateUser}>

        <Row className="mb-3">
            <h2>Shipping Information</h2>
            <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Your name</Form.Label>
            <Form.Control onBlur={handleNameChange} type="text" placeholder="Your name" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control value={user?.email} readOnly type="email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom04">
            <Form.Label>Address</Form.Label>
            <Form.Control onBlur={handleAddressChange} type="text" placeholder="Address" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustom05">
            <Form.Label>Phone</Form.Label>
            <Form.Control onBlur={handlePhoneChange} type="text" placeholder="Phone number" required />
          </Form.Group>
  
        </Row>
        <Button  type="submit">Shipping</Button>
      </Form>
    );
};

export default Shipment;