
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBhDX9NX_k30HdP94Tb3JmCiviwUDd6YXk",
    authDomain: "streamsitecity.firebaseapp.com",
    projectId: "streamsitecity",
    storageBucket: "streamsitecity.appspot.com",
    messagingSenderId: "722775494658",
    appId: "1:722775494658:web:ea3c609a6549b60484971b"
  };
  
  // Initialize Firebase
   const app= initializeApp(firebaseConfig);

   const auth = getAuth(app);

  export {
  auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,
  };