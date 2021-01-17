import React from "react";
import { Spinner } from "react-bootstrap";
import "./Spinner.css";

const Loader = () => {
  return (
    <div className="Spinner">
      <Spinner animation="border" role="status">
        <span className="sr-only"></span>
      </Spinner>
    </div>
  );
};

export default Loader;
