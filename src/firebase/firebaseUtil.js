import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD3Z-LK--v1A-qHXAGI9RWhXEpuc1ilO1w",
  authDomain: "newcrowndb.firebaseapp.com",
  databaseURL: "https://newcrowndb.firebaseio.com",
  projectId: "newcrowndb",
  storageBucket: "newcrowndb.appspot.com",
  messagingSenderId: "520358408054",
  appId: "1:520358408054:web:27f4bcb951fa7cbc835457"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error creating objects", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
