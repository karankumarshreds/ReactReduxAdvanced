import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../actions/userActions';
// components
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/Extras/FormContainer';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const signupUser = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      return false;
    } else {
      dispatch(signup({ name, email, password }));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <Form onSubmit={(e) => signupUser(e)}>
        <Form.Group controlId="name">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full name"
            value={email}
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button type="submit">Signup</Button>
      </Form>
    </FormContainer>
  );
};

export default Signup;
