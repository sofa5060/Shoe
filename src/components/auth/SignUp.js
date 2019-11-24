import React, { Component } from "react";
import "./Auth.css";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {signUp} from "../store/actions/authActions"

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        fullName:""
    };

    handleChange = e => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

  render() {
    return (
      <div className="form">
        <h1>SHOE.</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign up</h3>
          <div className="row">
            <h4>Full Name</h4>
            <input type="text" id="fullName" placeholder="John Doe" onChange={this.handleChange}/>
          </div>
          <div className="row">
            <h4>Email</h4>
            <input type="email" id="email" placeholder="Example@mail.com" onChange={this.handleChange} />
          </div>
          <div className="row">
            <h4>password</h4>
            <input type="password" id="password" placeholder="*******" onChange={this.handleChange} />
          </div>
          <h5>By singing up you’re acepting our terms & conditions</h5>
          <input type="submit" value="Sign up" />
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <h6>Already a member <Link to="../signin">Sign in</Link></h6>
        </form>
        <div className="terms">
            <h6>Conditions of Use</h6>
            <h6>Privacy Notice</h6>
            <h6>Help</h6>
        </div>
        <h6>© 2020 SHOE. All rights reserved.</h6>
      </div>
    );
  }
}

// mapping state and dispatch to props
const mapStateToProps = state => {
    console.log(state);
};

const mapDispatchToProps = dispatch => {
    return {
        signUp : (user) => dispatch(signUp(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
