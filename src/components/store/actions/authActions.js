export const signUp = (user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firebase = getFirebase();
      const firestore = getFirestore();
      // signing up with user inputs 
      firebase.auth().createUserWithEmailAndPassword(
          user.email,
          user.password
          //making a doc with the user id and putting the information in it
          ).then(resp => {
      return firestore.collection('users').doc(resp.user.uid).set({
          fullName: user.fullName,
          email: user.email,
          uid:resp.user.uid,
          cart:[]
          });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }
}