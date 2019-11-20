import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="grey-back">
            <div className="up">
              <div className="left">
                <h5>24/7 Support</h5>
                <span>1-333-444-5544</span>
              </div>
              <div className="right">
                <h5>
                  {" "}
                  <a href="">Track your order</a>
                </h5>
                <h5>
                  {" "}
                  <a href="">$ Dollar (US)</a>
                </h5>
                <h5>
                  {" "}
                  <a href="">Language (En)</a>
                </h5>
              </div>
            </div>
          </div>
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
          <div className="grey-back">
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
        <div className="hero-section">
          <div className="row">
            <div className="card">
              <h6>Winter 2020</h6>
              <h2>New Start</h2>
              <a href="#">SHOP NOW</a>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <h2>Hot Deals</h2>
              <a href="#">SHOP NOW</a>
            </div>
            <div className="card">
              <h2>Casual Sneakers</h2>
              <a href="#">SHOP NOW</a>
            </div>
            <div className="card">
              <h3>Get 25% Off One Item + Free Delivery</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
