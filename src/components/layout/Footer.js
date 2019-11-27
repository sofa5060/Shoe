/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import fb from "../img/fb.png";
import instagram from "../img/instagram.png";
import pintrerest from "../img/pintrerest.png";
import twitter from "../img/twitter.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <div className="row row-2">
          <div className="col">
              <h1>SHOE.</h1>
            </div>
            <ul className="col">
              <h4>Social links </h4>
              <div className="links">
                <a href="" className="link">
                  <img src={fb} alt="" />
                </a>
                  <a href="" className="link">
                    <img src={instagram} alt="" />
                  </a>
                  <a href="" className="link">
                    <img src={pintrerest} alt="" />
                  </a>
                  <a href="" className="link">
                    <img src={twitter} alt="" />
                  </a>
              </div>
            </ul>
            <ul className="col">
              <h4>Sign up to our newsletter</h4>
              <input type="text" required  placeholder="Your email address"/>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}
