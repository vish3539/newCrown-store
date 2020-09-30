import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyD3Z-LK--v1A-qHXAGI9RWhXEpuc1ilO1w",
    authDomain: "newcrowndb.firebaseapp.com",
    databaseURL: "https://newcrowndb.firebaseio.com",
    projectId: "newcrowndb",
    storageBucket: "newcrowndb.appspot.com",
    messagingSenderId: "520358408054",
    appId: "1:520358408054:web:27f4bcb951fa7cbc835457"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider)
export default firebase;