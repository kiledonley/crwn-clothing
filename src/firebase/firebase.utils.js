import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAXep-i-XD2y-8WbAgRJdxCzjsvK2Rww_Y",
    authDomain: "crwn-db-4e228.firebaseapp.com",
    projectId: "crwn-db-4e228",
    storageBucket: "crwn-db-4e228.appspot.com",
    messagingSenderId: "299817613505",
    appId: "1:299817613505:web:101db86148d1a1ce1fbc40",
    measurementId: "G-SMNSWLJZ4Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
