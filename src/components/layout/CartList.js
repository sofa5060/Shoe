import React, { Component } from 'react'
import CartProduct from "./CartProduct"

export default class CartList extends Component {
    state={
        ids:[]
        
    }
    componentWillMount = () => {
        const {ids} = this.props
        this.setState({
            ids
        })
    }
    render() {
        const {ids} = this.state
        return (
            <div className="cart-list">
            <div className="row">
                    <h3>Product</h3>
                    <h3>Name</h3>
                    <h3>Size</h3>
                    <h3>Quantity</h3>
                    <h3>Total</h3>
                </div>
                {ids.map(id => {
                    return <CartProduct id={id}/>
                })}    
            </div>
        )
    }
}
