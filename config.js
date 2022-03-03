import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBw2bKoxGjcHeAjGVjpy1gP0oejPGx9Jco",
  authDomain: "find-the-things.firebaseapp.com",
  projectId: "find-the-things",
  storageBucket: "find-the-things.appspot.com",
  messagingSenderId: "603002483201",
  appId: "1:603002483201:web:18811f4efe00a0aad5c600"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

 