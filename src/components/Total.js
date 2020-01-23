import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    price: state.carReducer.car.price,
    features: state.carReducer.car.features
  };
};

const Total = props => {
  return (
    <div className="content">
      <h4>
        Total Amount: $
        {[...props.features.map(ft => ft.price), Number(props.price)].reduce(
          (a, b) => b + a
        )}
      </h4>
    </div>
  );
};

export default connect(mapStateToProps, {})(Total);
