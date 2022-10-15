// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLX1syxedDary0rXXe9DG80hxKz85cFCc",
  authDomain: "simple-firebase-auth-2a7e1.firebaseapp.com",
  projectId: "simple-firebase-auth-2a7e1",
  storageBucket: "simple-firebase-auth-2a7e1.appspot.com",
  messagingSenderId: "105406211216",
  appId: "1:105406211216:web:9417d7b8f49e92d5a22415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;