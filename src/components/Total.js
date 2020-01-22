import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  const features = state.carReducer.car.features;
  const price = state.carReducer.car.price;
  const additionalPrice = features.map(
    ft => state.carReducer.additionalFeatures[ft.id]
  );
  return {
    price,
    additionalPrice
  };
};

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

export default connect(mapStateToProps, {})(Total);
