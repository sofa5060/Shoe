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
          <div className="row">
            <div className="col">
              <h1>SHOE.</h1>
            </div>
            <ul className="col">
              <h4>Company</h4>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Copy Rights</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
            <ul className="col">
              <h4>About</h4>
              <li>
                <a href="">Company Team</a>
              </li>
              <li>
                <a href="">Affliate links</a>
              </li>
              <li>
                <a href="">Press Kit</a>
              </li>
              <li>
                <a href="">Stores</a>
              </li>
            </ul>
            <ul className="col">
              <h4>Resources</h4>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Advertisement</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="row row-2">
            <ul className="col">
              <h4>Contact us</h4>
              <li>
                <a href="">Work With Us</a>
              </li>
              <li>
                <a href="">support@shoe.com</a>
              </li>
            </ul>
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
