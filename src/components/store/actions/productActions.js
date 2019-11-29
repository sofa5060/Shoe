
export const addToCart = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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
}
;
export const deleteItem = id => {
  return (dispatch, getState, { getFirebase,getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();
    const auth = state.firebase.auth;
    var cart = state.firebase.profile.cart
    let index = cart.indexOf(id);
      if (index > -1) {
        cart.splice(index, 1);
      }
    console.log(cart)
    firestore.collection("users").doc(auth.uid).update({
      cart
    })
  };
};
