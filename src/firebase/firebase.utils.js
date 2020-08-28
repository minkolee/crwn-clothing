import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsORpLnGZR6Kw1XvVj20yeAw1ePOuIDDU",
    authDomain: "crwn-db-4e3f7.firebaseapp.com",
    databaseURL: "https://crwn-db-4e3f7.firebaseio.com",
    projectId: "crwn-db-4e3f7",
    storageBucket: "crwn-db-4e3f7.appspot.com",
    messagingSenderId: "333084045964",
    appId: "1:333084045964:web:bb44298d72fa2e1b8b01a9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// 获取google验证器
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


console.log(auth.onAuthStateChanged(user => console.log(user)));
