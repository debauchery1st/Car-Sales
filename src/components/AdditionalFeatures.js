import React from "react";
import { connect } from "react-redux";
import AdditionalFeature from "./AdditionalFeature";

const mapStateToProps = state => {
  return {
    features: state.carReducer.features,
    additionalFeatures: state.carReducer.additionalFeatures
  };
};

const AdditionalFeatures = props => {
  console.log(props);
  const showing = () => {
    if (!props.features) return props.additionalFeatures;
    return props.additionalFeatures.filter(ft => !props.features.includes(ft));
  };
  const availableFeatures = showing();

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {availableFeatures.length > 0 ? (
        <ol type="1">
          {availableFeatures.map(item => (
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
