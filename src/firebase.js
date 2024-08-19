import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBZp1jL31Avp6eL2WxZmzYTV4SdIIJQZpg",
    authDomain: "gamezone-fb595.firebaseapp.com",
    projectId: "gamezone-fb595",
    storageBucket: "gamezone-fb595.appspot.com",
    messagingSenderId: "317733178950",
    appId: "1:317733178950:web:33f4b9e41feed52eaf0447",
    measurementId: "G-FTQZYK9838"
  };
  export const app= firebase.initializeApp(firebaseConfig)
  export const db = firebase.firestore()