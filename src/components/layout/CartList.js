import React, { Component } from "react";
import CartProduct from "./CartProduct";

export default class CartList extends Component {
  state = {
    ids: []
  };
  componentWillMount = () => {
    const { ids } = this.props;
    this.setState({
      ids
    });
  };
  render() {
    const { ids } = this.state;
    return (
      <div className="cart-list">
          <div className="row-2">
            <h4>Name</h4>
            <h4>Size</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
          </div>
        {ids.map(id => {
          return <CartProduct id={id} />;
        })}
      </div>
    );
  }
}
