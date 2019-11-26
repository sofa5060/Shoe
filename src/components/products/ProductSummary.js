import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class ProductSummary extends Component {
  render() {
    const { result } = this.props;
    return <div>{result.name}</div>
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
