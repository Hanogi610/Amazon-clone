import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyCywrzrkDwmlgFS1UVG3D3N6Agh9hQWVHQ",
  
    authDomain: "clone-c4745.firebaseapp.com",
  
    projectId: "clone-c4745",
  
    storageBucket: "clone-c4745.appspot.com",
  
    messagingSenderId: "58783144121",
  
    appId: "1:58783144121:web:2962960a108c2c68752368",
  
    measurementId: "G-6VSG6EDLJ8"
  
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };