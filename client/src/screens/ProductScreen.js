import React, { useEffect, useState } from "react";
import { productFetchAction } from "../actions/productActions";
import { connect, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const ProductScreen = ({ match, product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productFetchAction(match.params.id));
  }, [dispatch, match.params.id]);

  const addToCart = () => {
    // dispatch an action to add product to cart
    console.log(match.params.id, qty);
  };

  return (
    <Container className="my-5">
      <h1 className="mb-5">{product?.name}</h1>
      <Row>
        <Col xs={12} sm={6} className="mb-4">
          <img src={product?.image} width="100%" alt={product?.name} />
        </Col>
        <Col xs={12} sm={6}>
          <h3>Product details</h3>
          <hr />
          <p>{product?.description}</p>
          <hr />
          <Row>
            <Col xs={4} md={2}>
              <h5>Status:</h5>
            </Col>
            <Col>
              <h5>{product?.countInStock > 0 ? "In Stock" : "Out of stock"}</h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={4}>
              <Form.Group>
                <Form.Control
                  size="sm"
                  as="select"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}>
                  {Array(product?.countInStock)
                    .fill(null)
                    .map((el, i) => (
                      <option key={i}>{i + 1}</option>
                    ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col xs={8}>
              <Button
                onClick={() => addToCart()}
                variant="primary"
                disabled={product?.countInStock < 1}>
                Add to cart
              </Button>
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
