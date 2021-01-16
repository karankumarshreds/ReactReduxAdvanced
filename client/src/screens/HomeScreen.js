import React from "react";
import products from "../products";
import Card from "../components/ProductCard/ProductCard";
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const renderProducts = products.map((product) => (
    <Col key={product._id} xs={12} md={6} lg={4} xl={3} className="my-2">
      <Card product={product} />
    </Col>
  ));
  return (
    <div className="container my-5">
      <h1>Latest Products</h1>
      <Row className="justify-content-center">{renderProducts}</Row>
    </div>
  );
};

export default HomeScreen;
