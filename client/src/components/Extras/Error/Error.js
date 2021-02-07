import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const Error = ({ errorHeading, errorDescription, onDismiss }) => {
  const [show, setShow] = useState(true);
  const onClose = () => {
    setShow(false);
    if (onDismiss) {
      return onDismiss();
    }
  };
  return (
    <React.Fragment>
      {show && (
        <Alert
          className="container mt-5"
          variant="danger"
          onClose={() => onClose()}
          dismissible>
          <Alert.Heading>
            {errorHeading || 'Something went wrong'}
          </Alert.Heading>
          <p>
            {errorDescription ||
              'Something went wrong while processing your request, please try again later after some time.'}
          </p>
        </Alert>
      )}
    </React.Fragment>
  );
};

export default Error;
