import React, { Component } from 'react'

class ProductList extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state,ownProps);
};

const mapDispatchToProps = dispatch => {
    return {
        signUp : (user) => dispatch(signUp(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
