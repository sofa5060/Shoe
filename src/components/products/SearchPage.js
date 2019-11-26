import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import ProductList from "./ProductList";
import firebase from "firebase";
import NavBar from "../layout/NavBar";
import "./Product.css";

class SearchPage extends Component {
  state = {
    results: []
  };

  componentWillMount = () => {
    const db = firebase.firestore();
    const search = this.props.search;
    let results = [];
    console.log(search);
    db.collection("products")
      .orderBy("name")
      .startAt(search)
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          if (doc) {
            console.log(doc);
            const result = [doc.data(), doc.id];
            results.push(result);
          }
        });
        this.setState({
          results
        });
      });
  };

  handleSubmit = search => {
    this.props.history.push("/search/" + search);
  };
  render() {
    const { results } = this.state;
    return (
      <div>
        <NavBar submit={search => this.handleSubmit(search)} />
        <div className="search-page">
          <div className="filter-list">
            <h3>FOR</h3>
            <div className="list">
              <div className="row">
                <input type="checkbox" />
                <h5>Men</h5>
              </div>
              <div className="row">
                <input type="checkbox" />
                <h5>Women</h5>
              </div>
              <div className="row">
                <input type="checkbox" />
                <h5>Babies</h5>
              </div>
              <div className="row">
                <input type="checkbox" />
                <h5>Running</h5>
              </div>
            </div>
            <hr />
            <h3>Brand</h3>
            <div className="list">
              <div className="row">
                <input type="checkbox" />
                <h5>Nike</h5>
              </div>
              <div className="row">
                <input type="checkbox" />
                <h5>Adidas</h5>
              </div>
              <div className="row">
                <input type="checkbox" />
                <h5>Apple</h5>
              </div>
            </div>
            <hr />
            <h3>Color</h3>
            <div className="list">
              <div className="row color-row">
                <div className="color">
                  <input type="checkbox" />
                  <h5>Black</h5>
                </div>
                <div className="color">
                  <input type="checkbox" />
                  <h5>Orange</h5>
                </div>
              </div>
              <div className="row color-row">
                <div className="color">
                  <input type="checkbox" />
                  <h5>White</h5>
                </div>
                <div className="color">
                  <input type="checkbox" />
                  <h5>Green</h5>
                </div>
              </div>
              <div className="row color-row">
                <div className="color">
                  <input type="checkbox" />
                  <h5>Purple</h5>
                </div>
                <div className="color">
                  <input type="checkbox" />
                  <h5>Blue</h5>
                </div>
              </div>
            </div>
            <hr />
            <a href="" onClick={console.log("reset")}>
              Reset All
            </a>
          </div>
          <ProductList results={results} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // making the search input small and capitalize the first letter
  const capitalizeFirstLetter = string => {
    const str = string.toLowerCase();
    return str.charAt(0).toUpperCase() + string.slice(1);
  };
  const search = capitalizeFirstLetter(ownProps.match.params.result);

  // mapping the search to the props
  return {
    search
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
