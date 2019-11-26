import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import ProductList from "./ProductList";
import firebase from "firebase";

class SearchPage extends Component {
  state = {
    results: []
  };

  componentWillMount = () => {
    const db = firebase.firestore();
    const search = this.props.search
    let results = [];
    console.log(search)
    db.collection("products")
      .orderBy("name")
      .startAt(search)
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          if (doc) {
              console.log(doc)
              const result = [doc.data(),doc.id]
            results.push(result);
          }
        });
        this.setState({
          results
        });
      });
  };
  render() {
    const { results } = this.state;
    return (
      <div>
        <ProductList results={results} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const search = ownProps.match.params.result;

  return {
    search
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
