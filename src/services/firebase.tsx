// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlxrIOeU52pFolAx5nJnRUb7RnFcCNqMU",
  authDomain: "events-be04e.firebaseapp.com",
  projectId: "events-be04e",
  storageBucket: "events-be04e.appspot.com",
  messagingSenderId: "560340521347",
  appId: "1:560340521347:web:b85ef762d240ce9020e6b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const googleSignIn = async () => {
  try {
    const user = await signInWithPopup(auth, provider);
    return user.user;
  } catch (err) {
    console.log(err);
    alert("Google Signup error");
    throw new Error();
  }
};
export { app, auth, provider, googleSignIn };
