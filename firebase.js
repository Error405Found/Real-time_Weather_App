import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/performance";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuIpeBBs2WBBYtrqvlBpoaL2Ro6tHpAMI",
  authDomain: "weather-fire.firebaseapp.com",
  databaseURL: "https://weather-fire.firebaseio.com",
  projectId: "weather-fire",
  storageBucket: "weather-fire.appspot.com",
  messagingSenderId: "1005800057254",
  appId: "1:1005800057254:web:b7d15af4e88f790b4d4767"
};

if (!firebase.apps.length) {
  console.log(firebase.apps.length);
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
export const auth = firebase.auth();
