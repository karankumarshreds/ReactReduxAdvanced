import React, { useEffect } from "react";
import { connect } from "react-redux";

const CartScreen = (props) => {
  const renderCartItems = () => {
    return props?.cartItems?.map((item) => <h1 key={item?.id}>{item.name}</h1>);
  };
  return (
    <div>
      <h1>Cart Screen</h1>
      {renderCartItems()}
    </div>
  );
};

const mapStateToProps = ({ cartState }) => {
  return {
    cartItems: cartState.cartItems,
  };
};

export default connect(mapStateToProps, {})(CartScreen);
