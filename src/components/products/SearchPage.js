import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import ProductList from "./ProductList";
import firebase from "firebase";
import NavBar from "../layout/NavBar";
import "./Product.css";

class SearchPage extends Component {
  state = {
    results: [],
    terms: [],
    filteredResults: []
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
            const result = [doc.data()];
            results.push(result);
          }
        });
        this.setState({
          results,
          filteredResults: results
        });
      });
  };

  handleSubmit = search => {
    this.props.history.push("/search/" + search);
  };

  checkTerm = () => {
    let checkedValue = [];
    let inputElements = document.getElementsByClassName("checkbox");
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    this.setState(
      {
        terms: checkedValue
      },
      () => {
        this.getDataWithFilters();
      }
    );
  };

  getDataWithFilters = () => {
    const { results, terms } = this.state;
    if (terms.length) {
      let filteredResults = [];
      for (let i = 0; i < results.length; i++) {
        let result = results[i];
        for (let l = 0; l < terms.length; l++) {
          console.log("here");
          let term = terms[l];
          if (
            result[0]["type"] === term ||
            result[0]["brand"] === term ||
            result[0]["color"] === term
          ) {
            if (filteredResults.includes(result)) {
              return;
            } else {
              filteredResults.push(result);
            }
          }
        }
      }
      this.setState({
        filteredResults
      });
    } else {
      const db = firebase.firestore();
      const search = this.props.search;
      let results = [];
      db.collection("products")
        .orderBy("name")
        .startAt(search)
        .onSnapshot(snapshot => {
          snapshot.forEach(doc => {
            if (doc) {
              const result = [doc.data()];
              results.push(result);
            }
          });
          this.setState({
            filteredResults: results
          });
        });
    }
  };

  handleReset = () => {
    let inputElements = document.getElementsByClassName("checkbox");
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        inputElements[i].checked = false;
      }
    }
    this.setState({
      terms: []
    },()=>{
      this.getDataWithFilters()
    });
  };

  render() {
    const { filteredResults } = this.state;
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <NavBar submit={search => this.handleSubmit(search)} />
        <div className="search-page">
          <div className="filter-list">
            <h3>FOR</h3>
            <div className="list">
              <div className="row">
                <input
                  type="checkbox"
                  value="Men"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Men</h5>
              </div>
              <div className="row">
                <input
                  type="checkbox"
                  value="Women"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Women</h5>
              </div>
              <div className="row">
                <input
                  type="checkbox"
                  value="Babies"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Babies</h5>
              </div>
              <div className="row">
                <input
                  type="checkbox"
                  value="Running"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Running</h5>
              </div>
            </div>
            <hr />
            <h3>Brand</h3>
            <div className="list">
              <div className="row">
                <input
                  type="checkbox"
                  value="Nike"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Nike</h5>
              </div>
              <div className="row">
                <input
                  type="checkbox"
                  value="Adidas"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Adidas</h5>
              </div>
              <div className="row">
                <input
                  type="checkbox"
                  value="Apple"
                  className="checkbox"
                  onChange={this.checkTerm}
                />
                <h5>Apple</h5>
              </div>
            </div>
            <hr />
            <h3>Color</h3>
            <div className="list">
              <div className="row color-row">
                <div className="color">
                  <input
                    type="checkbox"
                    value="Black"
                    className="checkbox"
                    onChange={this.checkTerm}
                  />
                  <h5>Black</h5>
                </div>
                <div className="color">
                  <input
                    type="checkbox"
                    value="orange"
                    className="checkbox"
                    onChange={this.checkTerm}
                  />
                  <h5>Orange</h5>
                </div>
              </div>
              <div className="row color-row">
                <div className="color">
                  <input
                    type="checkbox"
                    value="White"
                    className="checkbox"
                    onChange={this.checkTerm}
                  />
                  <h5>White</h5>
                </div>
                <div className="color">
                  <input
                    type="checkbox"
                    value="Green"
                    className="checkbox"
                    onChange={this.checkTerm}
                  />
                  <h5>Green</h5>
                </div>
              </div>
              <div className="row color-row">
                <div className="color">
                  <input
                    type="checkbox"
                    value="Purple"
                    className="checkbox"
                    onChange={this.checkTerm}
                  />
                  <h5>Purple</h5>
                </div>
                <div className="color">
                  <input
                    type="checkbox"
                    value="Blue"
                    className="checkbox"
                    onChange={this.checkTerm}
                  />
                  <h5>Blue</h5>
                </div>
              </div>
            </div>
            <hr />
            <Link href="" onClick={this.handleReset}>
              Reset all
            </Link>
          </div>
          <ProductList results={filteredResults} />
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
  const auth = state.firebase.auth ? state.firebase.auth : null;

  // mapping the search to the props
  return {
    search,
    auth
  };
};

export default connect(mapStateToProps, null)(SearchPage);
