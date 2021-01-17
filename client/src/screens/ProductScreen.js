import React, { useEffect } from "react";
import { productFetchAction } from "../actions/productActions";
import { connect, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProductScreen = ({ match, product }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productFetchAction(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <Container className="my-5">
      <h1 className="mb-4">{product?.name}</h1>
      <Row>
        <Col xs={12} sm={6} className="mb-4">
          <img src={product?.image} width="100%" alt={product?.name} />
        </Col>
        <Col xs={12} sm={6}>
          <h3>Product details</h3>
          <p>{product?.description}</p>
          <Row>
            <Col>
              <Button variant="primary">Add to cart</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ productState }, { match }) => {
  return {
    error: productState.error,
    product: productState.products[match?.params?.id],
  };
};

export default connect(mapStateToProps, {})(ProductScreen);
