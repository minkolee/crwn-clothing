import firebase from "firebase/app";

import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.doc('/users/diaplayName')
firestore.collection('/users')

export default firestore;
