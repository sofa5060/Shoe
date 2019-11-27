import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import firebase from "firebase";
import CartList from "./CartList";
import NavBar from "./NavBar"

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
  render() {
    const { ids } = this.state;
    if (ids.length) {
      return (
        <div>
          <NavBar submit={search => this.handleSubmit(search)} />
          <CartList ids={ids} />
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
