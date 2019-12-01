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
                <Link to="/search/all" href="#">
                  SHOP NOW
                </Link>
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
                  <Link to="/search/all" href="#">
                    SHOP NOW
                  </Link>
                </div>
              </div>
              <div className="card card-3 wow fadeIn delay-2">
                <img src={imageThree} className="hide" alt="" />
                <img src={imageSeven} className="tablet" alt="" />
                <div className="text">
                  <h2>Casual Sneakers</h2>
                  <Link to="/search/all" href="#">
                    SHOP NOW
                  </Link>
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
            <Link to="/search/all" href="#">
              SEE ALL
            </Link>
          </div>
          <div className="row">
            <Link to="products/O0FHOdQMshNIzMhQ7vcq">
              <div className="box">
                <div className="left">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shoe-e7e15.appspot.com/o/imgaes%2F1.png?alt=media&token=76455d70-e25e-4bc7-af24-4acb7a94351e"
                    alt=""
                  />
                </div>
                <div className="middle">
                  <h3>Free RN 2018 Ladies Running Shoes</h3>
                  <div className="color color-1">
                    <div></div>
                    <h5>Blue</h5>
                  </div>
                  <h4>104.99</h4>
                  <h6>$139.99</h6>
                </div>
                <div className="right blue">
                  <h4>Best Sale</h4>
                </div>
              </div>
            </Link>
            <Link to="/products/EVdIyXomlvAgEJrSqL8B">
              <div className="box">
                <div className="left">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shoe-e7e15.appspot.com/o/imgaes%2F3.png?alt=media&token=7447cacd-c689-40e5-a8bb-30356557b2dd"
                    alt=""
                  />
                </div>
                <div className="middle">
                  <h3>Revolution Grey for Ladies Trainers</h3>
                  <div className="color color-2">
                    <div></div>
                    <h5>Grey</h5>
                  </div>
                  <h4>$35.00</h4>
                  <h6>$45.00</h6>
                </div>
                <div className="right yellow">
                  <h4>Sale</h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="row">
            <Link to="/products/XyzoOFWSKFtHG3pEmKIV">
              <div className="box">
                <div className="left">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shoe-e7e15.appspot.com/o/imgaes%2F5.png?alt=media&token=e1998bd3-ab16-4c87-8da4-1d6946df974d"
                    alt=""
                  />
                </div>
                <div className="middle">
                  <h3>Star Runner Child Girls Trainers</h3>
                  <div className="color color-5">
                    <div></div>
                    <h5>Black</h5>
                  </div>
                  <h4>$37.99</h4>
                  <h6>$50.00</h6>
                </div>
                <div className="right">
                  <h4>Out of stock</h4>
                </div>
              </div>
            </Link>
            <Link to="/products/TnDHdH7SR9zISJLcJJKa">
              <div className="box">
                <div className="left">
                  <img src="https://firebasestorage.googleapis.com/v0/b/shoe-e7e15.appspot.com/o/imgaes%2F10.png?alt=media&token=0f6af42c-645f-4437-9231-cfd354b93d0d" alt="" />
                </div>
                <div className="middle">
                  <h3>Daniel Wellington Women's 0511DW Classic Bristol</h3>
                  <div className="color color-5">
                    <div></div>
                    <h5>Black</h5>
                  </div>
                  <h4>$30.99</h4>
                  <h6>$60.00</h6>
                </div>
                <div className="right">
                  <h4>Out of stock</h4>
                </div>
              </div>
            </Link>
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
