import React, { Component } from "react";
import Vector from "../img/Vector-2.png";
import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import firebase from "firebase";
import { connect } from "react-redux";

class NavBar extends Component {
  state = {
    search: "",
    fullName:""
  };

  // functions for the side-navbar
  openSlideMenu = () => {
    document.getElementById("side-menu").style.width = "250px";
  };

  closeSlideMenu = () => {
    document.getElementById("side-menu").style.width = "0px";
  };

  // updating the state based on the user's input
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // giving the input to the homepage to make the search
  handleSubmit = () => {
    this.props.submit(this.state.search);
    this.setState({
      search: ""
    });
  };

  handleClick = () => {

  }

  componentWillMount = () => {
    const db = firebase.firestore();
    if (firebase.auth().currentUser !== null) {
      const uid = firebase.auth().currentUser.uid;
      db.collection("users")
        .doc(uid)
        .onSnapshot(
          {
            // Listen for document metadata changes
            includeMetadataChanges: true
          },
          doc => {
            this.setState({
              fullName:doc.data().fullName
            })
          }
        );
    }
  };

  render() {
    const { auth } = this.props;
    return (
      <nav>
        <div className="up">
          <div className="left">
            <h5>24/7 Support</h5>
            <span>1-333-444-5544</span>
          </div>
          <div className="right">
            <h5>
              {auth.uid ? <DropDownMenu name={this.state.fullName}/> : null}
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
            <div className="logo">
              <Link to="/">SHOE.</Link>
            </div>
            <form className="search hide" onSubmit={this.handleSubmit}>
              <input type="text" id="search" onChange={this.handleChange} required/>
              <input type="submit" value="SEARCH" />
            </form>
            <Link to="/cart">
              <div className="cart hide">
                <h4>MY CART</h4>
              </div>
            </Link>
            <Link to="/cart">
              <img src={Vector} className="tablet" alt="" />
            </Link>
          </div>
          <form className="search-2 tablet" onSubmit={this.handleSubmit}>
            <input type="text" id="search" onChange={this.handleChange} required/>
            <input type="submit" value="SEARCH"/>
          </form>
          {/* <ul className="down hide">
            <li>
              <Link to="/search/Women">WOMEN</Link>
            </li>
            <li>
              <Link to="/search/Men">MEN</Link>
            </li>
            <li>
              <Link to="/search/Kids">KIDS</Link>
            </li>
            <li>
              <Link to="/search/Running">RUNNING</Link>
            </li>
            <li>
              <Link to="/search/Deals">DEALS</Link>
            </li>
          </ul> */}
        </div>
      </nav>
    );
  }
}

// mapping state and dispatch to props
const mapStateToProps = state => {
  const auth = state.firebase.auth ? state.firebase.auth : null;
  // mapping user auth to props
  return {
    auth,
  };
};

export default connect(mapStateToProps, null)(NavBar);
