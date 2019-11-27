import React, { Component } from 'react'
import shoe2 from "../img/shoe2.png";
import firebase from "firebase"

export default class CartProduct extends Component {
    state = {
        result:[]
    }

    componentWillMount = () => {
        const db = firebase.firestore()
        const {id} = this.props
        console.log(id)
        db.collection("products")
        .doc(id)
        .onSnapshot(
          {
            // Listen for document metadata changes
            includeMetadataChanges: true
          },
          doc => {
            if (doc) {
              // adding the data to the state
              this.setState({
                result:doc.data()
              });
            }
          }
        )
    }
    render() {
        const {result} = this.state
        return (
            <div className="product">
                <div className="row">
                    <img src={shoe2} alt=""/>
                    {result.name}
                </div>

            </div>
        )
    }
}
