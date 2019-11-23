import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="up">
          <div className="left">
            <h5>24/7 Support</h5>
            <span>1-333-444-5544</span>
          </div>
          <div className="right">
            <h5>
              <a href="">Track your order</a>
            </h5>
            <h5>
              <a href="">$ Dollar (US)</a>
            </h5>
            <h5>
              <a href="">Language (En)</a>
            </h5>
          </div>
        </div>
        <div className="white-back">
          <div className="middle">
            <div className="logo">SHOE</div>
            <div className="search">
              <input type="text" id="search" />
              <input type="submit" value="SEARCH" />
            </div>
            <div className="cart">
              <h4>MY CART</h4>
            </div>
          </div>
          <ul className="down">
            <li>
              <a href="">WOMEN</a>
            </li>
            <li>
              <a href="">MEN</a>
            </li>
            <li>
              <a href="">KIDS</a>
            </li>
            <li>
              <a href="">RUNNING</a>
            </li>
            <li>
              <a href="">DEALS</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
