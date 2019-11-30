/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import imageOne from "../img/placeholder.png";
import imageTwo from "../img/Picture.png";
import imageThree from "../img/placeholder2.png";
import imageFour from "../img/placeholder3.png";
import imageFive from "../img/placeholder4.png";
import imageSix from "../img/placeholder5.png";
import imageSeven from "../img/placeholder6.png";
import shoe1 from "../img/shoe1.png";
import shoe2 from "../img/shoe2.png";
import shoe3 from "../img/shoe3.png";
import shoe4 from "../img/shoe4.png";
import fast from "../img/Fast.png";
import shield from "../img/Shield.png";
import medal from "../img/Medal.png";
import "./home.css";
import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    uid: ""
  };
  

  // making a search based on the input given by the navbar
  handleSubmit = search => {
    this.props.history.push("/search/" + search);
  };

  render() {
    return (
      <div>
        {/* adding submit method to the navbar to be able to make search from navbar */}
        <NavBar
          submit={search => this.handleSubmit(search)}
          signedOut={this.signedOut}
        />
        <div className="hero-section">
          <div className="row">
            <div className="card card-1 wow fadeIn">
              <img src={imageOne} className="hide" />
              <img src={imageFive} className="tablet" />
              <div className="text">
                <h6>Winter 2020</h6>
                <h2>New Start</h2>
                <Link to="/search/all" href="#">SHOP NOW</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row-1 ">
              <div className="card card-2 wow fadeIn delay-1">
                <img src={imageTwo} className="hide" alt="" />
                <img src={imageSix} className="tablet" alt="" />
                <div className="text">
                  <h2>Hot Deals</h2>
                  <Link to="/search/all" href="#">SHOP NOW</Link>
                </div>
              </div>
              <div className="card card-3 wow fadeIn delay-2">
                <img src={imageThree} className="hide" alt="" />
                <img src={imageSeven} className="tablet" alt="" />
                <div className="text">
                  <h2>Casual Sneakers</h2>
                  <Link to="/search/all" href="#">SHOP NOW</Link>
                </div>
              </div>
            </div>
            <div className="row-2">
              <div className="card card-4 wow fadeIn delay-3">
                <img src={imageFour} alt="" />
                <div className="text">
                  <h2>Get 25% Off One Item + Free Delivery</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className="bar">
            <h3>POPULAR TODAY</h3>
            <Link to="/search/all" href="#">SEE ALL</Link>
          </div>
          <div className="row">
            <div className="box">
              <div className="left">
                <img src={shoe4} alt="" />
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
                <img src={fast} alt="" />
                <h2>Fast Delivery</h2>
                <h3>
                  Get Delivered fast when you buy anything from us we have fast
                  Deliveries
                </h3>
              </div>
              <div className="box">
                <img src={medal} alt="" />
                <h2>High quality</h2>
                <h3>
                  Get Delivered fast when you buy anything from us we have fast
                  Deliveries
                </h3>
              </div>
              <div className="box">
                <img src={shield} alt="" />
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