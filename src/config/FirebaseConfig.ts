
import firebase from "firebase";

 const firebaseConfig = {
    apiKey: "AIzaSyAOA0xYQ2QH0876B-JVjTl8dTqE1o01fM8",
    authDomain: "ticket-5846c.firebaseapp.com",
    databaseURL: "https://ticket-5846c.firebaseio.com",
    projectId: "ticket-5846c",
    storageBucket: "ticket-5846c.appspot.com",
    messagingSenderId: "867526371109",
    appId: "1:867526371109:web:80c07ee384ee76ce73dccc",
    measurementId: "G-2VG7L9ZBGH"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export  {
    storage, firebase as default
  }