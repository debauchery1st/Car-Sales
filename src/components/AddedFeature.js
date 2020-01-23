import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { ...state.carReducer.car };
};

const AddedFeature = props => {
  const handleRemoveFeature = () => {
    console.log("handleRemoveFeature@AddedFeature.js");
    // addFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoveFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default connect(mapStateToProps, {})(AddedFeature);
