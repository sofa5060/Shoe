import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import firebase from "firebase";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Cart.css";
import CartProduct from "./CartProduct";
import Empty from "./Empty"

class Cart extends Component {
  state = {
    ids: []
  };
  componentWillMount = () => {
    const db = firebase.firestore();
    if (firebase.auth().currentUser !== null) {
      const uid = firebase.auth().currentUser.uid;
      db.collection("users")
        .doc(uid)
        .onSnapshot(
          {
            // Listen for document metadata changes
            includeMetadataChanges: true
          },
          doc => {
            if (doc) {
              // adding the data to the state
              this.setState({
                ids: doc.data().cart
              });
            }
          }
        );
    }
  };

  getData = () => {
    console.log("getting data", this.state.ids);
    const db = firebase.firestore();
    if (firebase.auth().currentUser !== null) {
      const uid = firebase.auth().currentUser.uid;
      db.collection("users")
        .doc(uid)
        .onSnapshot(
          {
            // Listen for document metadata changes
            includeMetadataChanges: true
          },
          doc => {
            if (doc) {
              // adding the data to the state
              this.setState({
                ids: doc.data().cart
              });
            }
          }
        );
    }
  };

  handleSubmit = () => {
    this.props.history.push("/sorry");
  };

  handleSearch = search => {
    this.props.history.push("/search/" + search);
  };

  render() {
    const { ids } = this.state;
    if (this.state.ids.length) {
      return (
        <div>
          <NavBar submit={search => this.handleSearch(search)} />
          <div className="cart-page">
            <div className="cart-list">
              <div className="row-2">
                <h4> </h4>
                <h4>Name</h4>
                <h4>Size</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
                <h4> </h4>
              </div>
              {ids.map(id => {
                return <CartProduct id={id} getData={this.getData} />;
              })}
            </div>
            <hr />
            <Link to="/sorry">Check Out</Link>
            <form className="check-out" onSubmit={this.handleSubmit}>
              <h1>Credit card details</h1>
              <h2>Card holder’s name</h2>
              <input type="text" placeholder="John doe" />
              <h2>Credit card number</h2>
              <input type="number" placeholder="1234  5678  9101  1213" />
              <div className="row">
                <div className="box">
                  <h2>Expiration date</h2>
                  <input type="text" placeholder="06/2020" />
                </div>
                <div className="box">
                  <h2>CVV</h2>
                  <input type="number" placeholder="123" />
                </div>
              </div>
              <input type="submit" value="CHECKOUT" />
            </form>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar submit={search => this.handleSearch(search)} />
            <Empty />
          <Footer />
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
