import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { productsFetchAction } from "../actions/productActions";
import Card from "../components/ProductCard/ProductCard";
import { Row, Col, Modal, Button } from "react-bootstrap";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsFetchAction());
  }, [dispatch]);
  console.log();

  const renderCards = props.products.map((product) => (
    <Col className="my-2" xs={12} md={6} lg={4} xl={3} key={product?.id}>
      <Card product={product} />
    </Col>
  ));
  return (
    <div className="container my-5">
      <h1>Latest Products</h1>
      <Row className="justify-content-center">{renderCards}</Row>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

const mapStateToProps = ({ productState }) => {
  return {
    ...productState,
    products: Object.values(productState.products),
  };
};

export default connect(mapStateToProps, {})(HomeScreen);
