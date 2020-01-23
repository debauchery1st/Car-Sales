import React from "react";
import { connect } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";

const mapStateToProps = state => {
  return {
    additionalFeatures: state.carReducer.additionalFeatures,
    features: state.carReducer.car.features
  };
};

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length > 0 ? (
        <ol type="1">
          {props.additionalFeatures
            .filter(ft => !props.features.includes(ft))
            .map(item => (
              <AdditionalFeature key={item.id} feature={item} />
            ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(mapStateToProps, {})(AdditionalFeatures);
