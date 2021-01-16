import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-auto">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text as="div">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text className="py-3" as="div">
          <Row className="align-items-center">
            <Col xs="5">
              <h5>${product.price}</h5>
            </Col>
            <Col>
              <Button variant="primary">Add to cart</Button>
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
