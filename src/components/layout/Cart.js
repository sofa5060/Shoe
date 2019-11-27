import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import firebase from "firebase";
import CartList from "./CartList";
import NavBar from "./NavBar"
import Footer from "./Footer"
import "./Cart.css"

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

    db.collection("products");
  };

  handleSubmit = () => {
    this.props.history.push("/")
  }
  render() {
    const { ids } = this.state;
    if (ids.length) {
      return (
        <div>
          <NavBar submit={search => this.handleSubmit(search)} />
            <div className="cart-page">
              <CartList ids={ids} />
              <hr/>
              <form className="check-out" onSubmit={this.handleSubmit}>
                <h1>Credit card details</h1>
                <h2>Card holder’s name</h2>
                <input type="text" placeholder="John doe"/>
                <h2>Credit card number</h2>
                <input type="number" placeholder="1234  5678  9101  1213"/>
                <div className="row">
                  <div className="box">
                    <h2>Expiration date</h2>
                    <input type="text" placeholder="06/2020"/>
                  </div>
                  <div className="box">
                    <h2>CVV</h2>
                    <input type="number" placeholder="123"/>
                  </div>
                </div>
                <input type="submit" value="CHECKOUT"/>
              </form>
            </div>
          <Footer />
        </div>
      );
    } else {
      return " ";
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
