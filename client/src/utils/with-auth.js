import React from "react";
import { connect } from "react-redux";

/* use this for private pages */
export const WithAuth = (Component) => {
  class Authenticate extends React.Component {
    componentDidMount() {
      // if user is logged in
      if (!this.props.userInfo) {
        this.props.history.push("/signin");
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
