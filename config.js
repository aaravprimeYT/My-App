import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyDghU1axBVq3FYb8JJJ-TAVmsFfTTv-JdI",
    authDomain: "dipndye-f10f2.firebaseapp.com",
    projectId: "dipndye-f10f2",
    storageBucket: "dipndye-f10f2.appspot.com",
    messagingSenderId: "467834246684",
    appId: "1:467834246684:web:044eeb570a8b2286a9f1d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()