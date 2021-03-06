import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartItemAddAction } from "../../actions/cartActions";
import { Card, Row, Col } from "react-bootstrap";
import Modal from "../Extras/Modal/Modal";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartItemAddAction(product.id, 1));
  };
  return (
    <Card style={{ width: "18rem" }} className="mx-auto ProductCard">
      <Link to={`/product/${product.id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </Card.Title>
        <Card.Text as="div">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text className="py-3" as="div">
          <Row className="align-items-center">
            <Col xs="5">
              <h5>${product.price}</h5>
            </Col>
            <Col>
              <Modal
                headingText={product.name}
                buttonText="Quick View"
                contentText={
                  <div>
                    <h5>Price: {product.price}</h5>
                    <p>{product.description}</p>
                  </div>
                }
                yesText="Add to cart"
                noText="Cancel"
                onSuccess={addToCart}
              />
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
