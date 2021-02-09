import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { profileFetchAction } from '../actions/profileActions';
import { Container } from 'react-bootstrap';

const ProfileScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(profileFetchAction());
  }, [dispatch]);
  console.log(props.profileState, 'PROFILE STATE');
  return <Container>Profile Page</Container>;
};

const mapStateToProps = ({ profileState }) => {
  return { profileState };
};

export default connect(mapStateToProps)(ProfileScreen);
