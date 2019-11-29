import React from 'react'
import Sad from "../img/Sad.png"
import "./Cart.css"

export default function Empty() {
    return (
        <div className="message">
            <img src={Sad} alt=""/>
            <h1>We are sad :( The cart is empty. Didn't you like something?</h1>
            <h3>You need to add something to the cart</h3>
        </div>
    )
}
