import React, { Component } from "react";
import firebase from "firebase";
import NavBar from "../layout/NavBar";
import shoe2 from "../img/shoe2.png";
import { connect } from "react-redux";
import {addToCart} from "../store/actions/productActions"
import "./Product.css"

class ProductDetails extends Component {
  state = {
    result: []
  };

  componentWillMount = () => {
    const db = firebase.firestore();
    const id = this.props.match.params.id;
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

  handleSubmit = e => {
    e.preventDefault();
    this.props.addToCart(this.props.match.params.id)
  };

  render() {
    const { result } = this.state;
    return (
      <div>
        <NavBar />
        <div className="product">
          <div className="product-detail">
            <h1>{result.name}</h1>
            <p>{result.detail}</p>
            <h5>{"$" + result.price}</h5>
            <a href="" onClick={this.handleSubmit}>
              Add to Cart
            </a>
          </div>
          <div className="product-image">
              <img src={shoe2} alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

// mapping state and dispatch to props
const mapStateToProps = state => {
    // mapping auth to props
    console.log(state)
    const auth = state.firebase.auth ? state.firebase.auth : null;
    return {
      auth
    };
  };
  
  const mapDispatchToProps = dispatch => {
    // mapping add to cart method to props and dispatching it
    return {
      addToCart: id => dispatch(addToCart(id))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
