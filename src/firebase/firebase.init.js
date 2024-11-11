import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkgn3tvr1_q6doJAIIl9Jz6CbusSp9F3o",
  authDomain: "simple-firebase-257b7.firebaseapp.com",
  projectId: "simple-firebase-257b7",
  storageBucket: "simple-firebase-257b7.firebasestorage.app",
  messagingSenderId: "942395760854",
  appId: "1:942395760854:web:de45cd36395a0d49686977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
 export default auth