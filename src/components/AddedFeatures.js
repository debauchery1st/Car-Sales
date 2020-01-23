import React from "react";
import { connect } from "react-redux";
import AddedFeature from "./AddedFeature";

const mapStateToProps = state => {
  return {
    ...state.carReducer.car,
    additionalFeatures: state.carReducer.additionalFeatures
  };
};

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, {})(AddedFeatures);
