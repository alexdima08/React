import firebase from "firebase/compat/app"
import "firebase/compat/database"
const firebaseConfig = {
    apiKey: "AIzaSyBdZjzUrx3yI1YnY1zNbOhi1X1vhyX35GU",
    authDomain: "proiect-a38b8.firebaseapp.com",
    projectId: "proiect-a38b8",
    storageBucket: "proiect-a38b8.appspot.com",
    messagingSenderId: "545750720495",
    appId: "1:545750720495:web:7ab61669fe856c30dca01a"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;