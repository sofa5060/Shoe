import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class SearchPage extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log(state,ownProps);
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
