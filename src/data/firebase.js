import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyD9_xM1QwJu2UitALH_xWiPmYj0lSn0_vo",
    authDomain: "web-school-platform-istmo.firebaseapp.com",
    databaseURL: "https://web-school-platform-istmo.firebaseio.com",
    projectId: "web-school-platform-istmo",
    storageBucket: "web-school-platform-istmo.appspot.com",
    messagingSenderId: "342380784090"
};

firebase.initializeApp(config);
console.log(firebase)
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();