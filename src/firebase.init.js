// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALlnqO0iHykX3txi5PPYQ3eMqY9NOhZKQ",
  authDomain: "sky-device-shop.firebaseapp.com",
  projectId: "sky-device-shop",
  storageBucket: "sky-device-shop.appspot.com",
  messagingSenderId: "415600494671",
  appId: "1:415600494671:web:97a653f98d4af90d22823a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;