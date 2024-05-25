// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAd5e71R9ZLciT8qRAeawA2HLqvz5wISs",
  authDomain: "panwala-3d45f.firebaseapp.com",
  projectId: "panwala-3d45f",
  storageBucket: "panwala-3d45f.appspot.com",
  messagingSenderId: "144172802455",
  appId: "1:144172802455:web:532d61f94092f6a68524d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}