import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { productsFetchAction } from "../actions/productActions";
import Card from "../components/ProductCard/ProductCard";
import { Row, Col } from "react-bootstrap";
import Spinner from "../components/Extras/Spinner/Spinner";
import Error from "../components/Extras/Error/Error";

const HomeScreen = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsFetchAction());
  }, [dispatch]);
  const renderCards = props.products.map((product) => (
    <Col className="my-2 mx-2" xs={12} md={6} lg={4} xl={3} key={product?.id}>
      <Card product={product} />
    </Col>
  ));
  if (props.loading) {
    return <Spinner />;
  }
  if (props.error) {
    return <Error errorHeading={props.error} />;
  }
  return (
    <div className="container my-5">
      <h1>Latest Products</h1>
      <Row className="justify-content-center">{renderCards}</Row>
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
