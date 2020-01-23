import React from "react";
import { connect } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";

const mapStateToProps = state => {
  return {
    features: state.carReducer.features,
    additionalFeatures: state.carReducer.additionalFeatures.filter(
      ft => !state.carReducer.car.features.includes(ft)
    )
  };
};

const AdditionalFeatures = props => {
  console.log(props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length > 0 ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
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
