import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import ProductSummary from "./ProductSummary";

class ProductList extends Component {
  render() {
    const { results } = this.props;
    return (
      <div className="products-list">
        {results.map(result => {
          return (
            <Link to={"/products/" + result[0].id} key={result[0].id}>
              <ProductSummary result={result[0]}/>
            </Link>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const results = ownProps.results;
  console.log(results);
  return {
    results
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
