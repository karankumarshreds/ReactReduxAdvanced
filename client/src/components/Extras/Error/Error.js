import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const Error = ({ errorHeading, errorDescription }) => {
  const [show, setShow] = useState(true);
  return (
    <React.Fragment>
      {show && (
        <Alert
          className="container"
          variant="danger"
          onClose={() => setShow(false)}
          dismissible>
          <Alert.Heading>
            {errorHeading || "Something went wrong"}
          </Alert.Heading>
          <p>
            {errorDescription ||
              "Something went wrong while processing your request, please try again later after some time."}
          </p>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default Error;
