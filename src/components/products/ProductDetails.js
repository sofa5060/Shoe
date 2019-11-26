import React, { Component } from 'react'
import firebase from "firebase"

export default class ProductDetails extends Component {

    componentWillMount = () => {
        const db = firebase.firestore()
        let result = db.collection("")
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
