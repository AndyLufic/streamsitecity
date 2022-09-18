<<<<<<< HEAD

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

=======
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
>>>>>>> 3f8f2dc8c9f79c37b0cc17542a90b6498bd8f9fc

const firebaseConfig = {
    apiKey: "AIzaSyBhDX9NX_k30HdP94Tb3JmCiviwUDd6YXk",
    authDomain: "streamsitecity.firebaseapp.com",
    projectId: "streamsitecity",
    storageBucket: "streamsitecity.appspot.com",
    messagingSenderId: "722775494658",
    appId: "1:722775494658:web:ea3c609a6549b60484971b"
  };
  
  // Initialize Firebase
<<<<<<< HEAD
   const app= initializeApp(firebaseConfig);

   const auth = getAuth(app);

  export {
  auth,createUserWithEmailAndPassword, signInWithEmailAndPassword,
  };
=======
  const firebase = initializeApp(firebaseConfig);

  export default firebase;
>>>>>>> 3f8f2dc8c9f79c37b0cc17542a90b6498bd8f9fc
