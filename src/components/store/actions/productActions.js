import { getFirestore } from "redux-firestore";

export const addToCart = id => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirestore();
    const state = getState();
    const auth = state.firebase.auth;
    const cart = state.firebase.profile.cart
    if(cart.includes(id)){
      return
    }else{
      const newCart = [...cart,id]
      if (auth.uid) {
        firestore.collection("users").doc(auth.uid).update({
          cart:newCart
        })
      }
    }
  };
};
