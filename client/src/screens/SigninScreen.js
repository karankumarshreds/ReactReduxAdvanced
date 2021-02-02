import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { signin } from "../actions/userActions";
// components
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Spinner from "../components/Extras/Spinner/Spinner";
import Error from "../components/Extras/Error/Error";
import FormContainer from "../components/Extras/FormContainer";

const SigninScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const signinUser = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  if (props.error) {
    return <Error errorHeading={props.error} />;
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={(e) => signinUser(e)}>
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
        <Button type="submit">Signin</Button>
      </Form>
    </FormContainer>
  );
};

const mapStateToProps = ({ userState }) => {
  const { userInfo, loading, error } = userState;
  return { userInfo, loading, error };
};

export default connect(mapStateToProps, {})(SigninScreen);
