import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  cartItemAddAction,
  cartItemRemoveAction,
} from "../actions/cartActions";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import DeleteIcon from "@material-ui/icons/Delete";

const CartScreen = (props) => {
  const dispatch = useDispatch();

  const emptyCartMessage = () => {
    if (props?.cartItems?.length < 1) {
      return (
        <Card bg="light" text="dark" style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>Your cart is empty</Card.Title>
            <Card.Text>
              Go back to the home page and start exploring.{" "}
              <Link to="/">Take me back!</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return <React.Fragment></React.Fragment>;
    }
  };

  const updateItemQuantity = (id, qty) => {
    dispatch(cartItemAddAction(id, qty));
  };

  const removeFromCart = (id) => {
    dispatch(cartItemRemoveAction(id));
  };

  const proceedToCheckout = () => {
    props.history.push("/signin?redirect=shipping");
  };

  return (
    <Container className="my-5">
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          <br />
          {emptyCartMessage()}
          <ListGroup variant="flush">
            {props?.cartItems?.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Link to={`/product/${item.id}`}>
                      <Image src={item.image} fluid rounded className="my-2" />
                    </Link>
                  </Col>
                  <Col md={3}>{item.name}</Col>
                  <Col md={2} className="mb-2">
                    ${item.price}
                  </Col>
                  <Col xs={3} md={2}>
                    <Form.Group>
                      <Form.Control
                        size="sm"
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          updateItemQuantity(item.id, e.target.value)
                        }>
                        {Array(item.countInStock)
                          .fill(null)
                          .map((el, i) => (
                            <option key={i}>{i + 1}</option>
                          ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={1} md={3}>
                    <DeleteIcon
                      onClick={() => removeFromCart(item.id)}
                      style={{ cursor: "pointer" }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 className="px-2 py-2">
                  Subtotal (
                  {props.cartItems?.reduce(
                    (acc, el) => acc + Number(el.qty),
                    0
                  )}
                  ) items
                </h3>
                $
                {props.cartItems?.reduce(
                  (acc, el) => acc + Number(el.price) * Number(el.qty),
                  0
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="primary"
                  className="btn-block"
                  disabled={props.cartItems?.length === 0}
                  onClick={() => proceedToCheckout()}>
                  Proceed to checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ cartState }) => {
  return {
    cartItems: cartState.cartItems,
  };
};

export default connect(mapStateToProps, {})(CartScreen);
