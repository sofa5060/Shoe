import React, { Component } from "react";
import shoe2 from "../img/shoe2.png";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
export default class CartProduct extends Component {
  state = {
    result: [],
    quantity: 1
  };

  componentWillMount = () => {
    const db = firebase.firestore();
    const { id } = this.props;
    console.log(id);
    db.collection("products")
      .doc(id)
      .onSnapshot(
        {
          // Listen for document metadata changes
          includeMetadataChanges: true
        },
        doc => {
          if (doc) {
            // adding the data to the state
            this.setState({
              result: doc.data()
            });
          }
        }
      );
  };

  handleChange = e => {
    const quantity = e.target.value;
    if (quantity > 0) {
      this.setState({
        quantity
      });
    } else {
      this.setState({
        quantity: 1
      });
    }
  };
  render() {
    const { result, quantity } = this.state;
    return (
      <div className="product row">
        <img src={shoe2} alt="" />
        <h4>{result.name}</h4>
        <h5>{result.size}</h5>
        <TextField
          id="standard-number"
          label="Quantity"
          type="number"
          onChange={this.handleChange}
        />
        <h5>{"$" + result.price * quantity}</h5>
        <CloseIcon />
      </div>
    );
  }
}
