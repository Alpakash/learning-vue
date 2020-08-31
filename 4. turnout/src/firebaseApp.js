import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI5NeIcnMM5mSc6hfn6TpDUL9rd2egDKc",
  authDomain: "turnout-fdd88.firebaseapp.com",
  databaseURL: "https://turnout-fdd88.firebaseio.com",
  projectId: "turnout-fdd88",
  storageBucket: "turnout-fdd88.appspot.com",
  messagingSenderId: "779463181951",
  appId: "1:779463181951:web:dd9572e25dc1e370aba14a"
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const eventsRef = firebaseApp.database().ref().child('events');