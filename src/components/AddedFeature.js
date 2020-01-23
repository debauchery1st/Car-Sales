import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/removeFeature";

const mapStateToProps = state => {
  return { ...state.carReducer.car };
};

const AddedFeature = props => {
  const handleRemoveFeature = () => {
    props.removeFeature(props.feature);
    console.log("handleRemoveFeature@AddedFeature.js");
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

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
