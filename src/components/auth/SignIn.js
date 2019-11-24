import React, { Component } from "react";
import "./Auth.css";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import {signIn} from "../store/actions/authActions"

class SignIn extends Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = e => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signIn(this.state)
    }

  render() {
      const {auth} = this.props
      if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="form">
        <h1>SHOE.</h1>
        <form onSubmit={this.handleSubmit}>
          <h3>Sign in</h3>
          <div className="row">
            <h4>Email</h4>
            <input type="email" id="email" placeholder="Example@mail.com" onChange={this.handleChange} />
          </div>
          <div className="row">
            <h4>password</h4>
            <input type="password" id="password" placeholder="*******" onChange={this.handleChange} />
          </div>
          <h5>By singing up you’re acepting our terms & conditions</h5>
          <input type="submit" value="Sign in" />
          <div className="or">
            <hr className="bar" />
            <span>OR</span>
            <hr className="bar" />
          </div>
          <h6>Not a Member Yet ? <Link to="../signUp">Sign in</Link></h6>
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
    const auth = state.firebase.auth ? state.firebase.auth : null
    return{
        auth,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        signIn : (user) => dispatch(signIn(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
