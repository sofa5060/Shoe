import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import shoe2 from "../img/shoe2.png";
import Vector from "../img/Vector-2.png";

class ProductSummary extends Component {
  render() {
    const { result } = this.props;
    return <div className="box">
      <h5>
        {result.type}
      </h5>
      <div className="product-image">
        <img src={shoe2}/>
      </div>
      <h2>{result.name}</h2>
      <h4>Price:</h4>
      <h3>{"$"+ result.price}</h3>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  const result = ownProps.result;
  return {
    result
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSummary);
