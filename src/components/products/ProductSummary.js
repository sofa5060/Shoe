import React, { Component } from "react";
import { connect } from "react-redux";

class ProductSummary extends Component {
  render() {
    const { result } = this.props;
    return <div className="box">
      <h5>
        {result.type}
      </h5>
      <div className="product-image">
        <img src={result.photoURL} alt="shoe"/>
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
export default connect(mapStateToProps, null)(ProductSummary);
