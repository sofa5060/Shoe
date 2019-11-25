/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Vector from "../img/Vector-2.png"
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class NavBar extends Component {
  state={
    search:""
  }

  handleChange = e => {
    this.setState({
      [e.target.id]:e.target.value
    })
    console.log(this.state)
  }

  handeSubmit = () => {
    console.log(this.props)
    //this.props.history.push("/search")
  }
  // show & hide side menu
  openSlideMenu = () => {
    document.getElementById("side-menu").style.width = "250px";
  };

  closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0px";
  };

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
            <a onClick={this.openSlideMenu} className="hamburger">
              <svg width="21" height="21">
                <path d="M0,5 30,5" stroke="#333" strokeWidth="3" />
                <path d="M0,12 30,12" stroke="#333" strokeWidth="3" />
                <path d="M0,19 30,19" stroke="#333" strokeWidth="3" />
              </svg>
            </a>
            <div id="side-menu" className="side-nav">
              <a className="btn-close" onClick={this.closeSlideMenu}>
                <svg width="21" height="21">
                  <path d="M0,5 30,5" stroke="#333" strokeWidth="3" />
                  <path d="M0,12 30,12" stroke="#333" strokeWidth="3" />
                  <path d="M0,19 30,19" stroke="#333" strokeWidth="3" />
                </svg>
              </a>
              <a onClick={this.closeSlideMenu}>Home</a>
              <a onClick={this.closeSlideMenu}>Travel info</a>
              <a onClick={this.closeSlideMenu}>Gallery</a>
            </div>
            <div className="logo">SHOE.</div>
            <div className="search hide">
              <input type="text" id="search" onChange={this.handleChange}/>
              <input type="submit" value="SEARCH" onClick={this.handeSubmit}/>
            </div>
            <div className="cart hide">
              <h4>MY CART</h4>
            </div>
            <img src={Vector} className="tablet" alt=""/>
          </div>
          <div className="search-2 tablet">
              <input type="text" id="search" />
              <input type="submit" value="SEARCH"/>
          </div>
          <ul className="down hide">
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

const mapStateToProps = (state,ownProps) => {
  console.log(state,ownProps);
};

const mapDispatchToProps = dispatch => {
  return {
      
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
