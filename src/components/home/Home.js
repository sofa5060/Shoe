import React, { Component } from "react";
import imageOne from "../img/placeholder.png";
import imageTwo from "../img/Picture.png";
import imageThree from "../img/placeholder2.png";
import imageFour from "../img/placeholder3.png";
import shoe1 from "../img/shoe1.png";
import shoe2 from "../img/shoe2.png";
import shoe3 from "../img/shoe3.png";
import shoe4 from "../img/shoe4.png";
import fast from "../img/Fast.png";
import shield from "../img/Shield.png";
import medal from "../img/Medal.png";
import "./home.css";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="hero-section">
          <div className="row">
            <div className="card card-1">
              <img src={imageOne} alt="" />
              <div className="text">
                <h6>Winter 2020</h6>
                <h2>New Start</h2>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card card-2">
              <img src={imageTwo} alt="" />
              <div className="text">
                <h2>Hot Deals</h2>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className="card card-3">
              <img src={imageThree} alt="" />
              <div className="text">
                <h2>Casual Sneakers</h2>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
            <div className="card card-4">
              <img src={imageFour} alt="" />
              <div className="text">
                <h2>Get 25% Off One Item + Free Delivery</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="bar">
            <h3>POPULAR TODAY</h3>
            <a href="">SEE ALL</a>
          </div>
          <div className="row">
            <div className="box">
              <div className="left">
                <img src={shoe1} alt="" />
              </div>
              <div className="middle">
                <h3>Nike motherfucker nice sneakers for men</h3>
                <div className="color color-1">
                  <div></div>
                  <h5>Blue</h5>
                </div>
                <h4>$79.99</h4>
                <h6>$139.99</h6>
              </div>
              <div className="right blue">
                <h4>Best Sale</h4>
              </div>
            </div>
            <div className="box">
              <div className="left">
                <img src={shoe2} alt="" />
              </div>
              <div className="middle">
                <h3>Nike motherfucker for strongest mothers</h3>
                <div className="color color-2">
                  <div></div>
                  <h5>Grey</h5>
                </div>
                <h4>$79.99</h4>
                <h6>$139.99</h6>
              </div>
              <div className="right yellow">
                <h4>Sale</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="box">
              <div className="left">
                <img src={shoe3} alt="" />
              </div>
              <div className="middle">
                <h3>Nike motherfucker nice sneakers for both</h3>
                <div className="color color-1">
                  <div></div>
                  <h5>Blue</h5>
                </div>
                <h4>$79.99</h4>
                <h6>$139.99</h6>
              </div>
              <div className="right">
                <h4>Out of stock</h4>
              </div>
            </div>
            <div className="box">
              <div className="left">
                <img src={shoe4} alt="" />
              </div>
              <div className="middle">
                <h3>Daniel Wellington Women's 0511DW Classic Bristol</h3>
                <div className="color color-4">
                  <div></div>
                  <h5>Red</h5>
                </div>
                <h4>$79.99</h4>
                <h6>$139.99</h6>
              </div>
              <div className="right">
                <h4>Out of stock</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="white-back">
          <div className="section-3">
            <h1>Buying from SHOE.</h1>
            <div className="boxes">
              <div className="box">
                <img src={fast} alt=""/>
                <h2>Fast Delivery</h2>
                <h3>
                  Get Delivered fast when you buy anything from us we have fast
                  Deliveries
                </h3>
              </div>
              <div className="box">
                <img src={medal} alt=""/>
                <h2>High quality</h2>
                <h3>
                  Get Delivered fast when you buy anything from us we have fast
                  Deliveries
                </h3>
              </div>
              <div className="box">
                <img src={shield} alt=""/>
                <h2>No Risk</h2>
                <h3>
                  If you don’t like or have any problem you can cancel anytime
                  you want
                </h3>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
