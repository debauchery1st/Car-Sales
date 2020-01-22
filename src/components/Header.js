import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { ...state.carReducer.car };
};

const Header = props => {
  // console.log(props);
  return (
    <span>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </span>
  );
};

// export default Header;
export default connect(mapStateToProps, {})(Header);
