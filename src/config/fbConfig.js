import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD0WANNhXkZs8M-o6hZD41-AnYmv5NhD_4",
    authDomain: "shoe-e7e15.firebaseapp.com",
    databaseURL: "https://shoe-e7e15.firebaseio.com",
    projectId: "shoe-e7e15",
    storageBucket: "shoe-e7e15.appspot.com",
    messagingSenderId: "519539806411",
    appId: "1:519539806411:web:2313f9f13dcd6758684b4e",
    measurementId: "G-8PNLB1L087"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
