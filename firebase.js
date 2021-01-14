import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-3DusbPBYzV_mSAFxM6iaJz4ZIFLjKfM",
  authDomain: "snapchat-clone-mr.firebaseapp.com",
  projectId: "snapchat-clone-mr",
  storageBucket: "snapchat-clone-mr.appspot.com",
  messagingSenderId: "587192567341",
  appId: "1:587192567341:web:6ff85bfcc54489f041daa4",
  measurementId: "G-6KPG3RKFNE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();