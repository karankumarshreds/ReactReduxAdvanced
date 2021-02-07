import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { signup } from '../actions/userActions';
// components
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/Extras/FormContainer';
import Error from '../components/Extras/Error/Error';
import Spinner from '../components/Extras/Spinner/Spinner';
import CustomError from '../components/Extras/Error/Error';

const Signup = ({ userState }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [customError, setCustomError] = useState('');

  const dispatch = useDispatch();

  const signupUser = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      return setCustomError('All fields needs to be filled');
    } else {
      dispatch(signup({ name, email, password }));
    }
  };

  const { error, loading } = userState;
  const showErrorOrLoading = () => {
    if (error) {
      return (
        <Error
          errorHeading={error}
          errorDescription="Please try again with valid fields"
        />
      );
    } else if (loading) {
      return <Spinner />;
    }
  };

  return (
    <FormContainer>
      {showErrorOrLoading()}
      {customError && (
        <CustomError
          errorHeading={customError}
          errorDescription={` `}
          onDismiss={() => setCustomError()}
        />
      )}
      <h1>Sign Up</h1>
      <Form onSubmit={(e) => signupUser(e)}>
        <Form.Group controlId="name">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full name"
            value={name}
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

const mapStateToProps = ({ userState }) => {
  return { userState };
};

export default connect(mapStateToProps)(Signup);
