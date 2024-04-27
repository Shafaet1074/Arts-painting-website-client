// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRD_qEcaMS6IG2dHDwIHoTsx2nT8jTLwc",
  authDomain: "art-painting--website.firebaseapp.com",
  projectId: "art-painting--website",
  storageBucket: "art-painting--website.appspot.com",
  messagingSenderId: "599752371482",
  appId: "1:599752371482:web:79b5127e66eb8d576250a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;