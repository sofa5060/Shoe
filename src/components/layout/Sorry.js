import React from "react";
import Sad from "../img/Sad.png";
import "./Cart.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Sorry(props) {
  const handleSubmit = () => {
    console.log(this.props);
  };
  return (
    <div>
      <NavBar submit={search => handleSubmit(search)} />
      <div className="message">
        <img src={Sad} alt="" />
        <h1>We are sorry :( , The store isn't available in your country.</h1>
        <h3>P.S. : visit our physical store as soon as possible please.</h3>
      </div>
      <Footer />
    </div>
  );
}
