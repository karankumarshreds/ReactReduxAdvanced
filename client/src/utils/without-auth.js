import React from "react";
import { connect } from "react-redux";

/* use this for public pages */
export const WithoutAuth = (Component) => {
  class Authenticate extends React.Component {
    componentDidMount() {
      // if user is logged in
      if (this.props.userInfo) {
        this.props.history.push("/");
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }
  const mapStateToProps = ({ userState }) => {
    return { userInfo: userState.userInfo };
  };
  return connect(mapStateToProps)(Authenticate);
};
