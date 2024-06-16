// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9DXwqYBFL6yQzEl8haq9tNbA7rcTW4a8",
  authDomain: "marketplace-6d379.firebaseapp.com",
  projectId: "marketplace-6d379",
  storageBucket: "marketplace-6d379.appspot.com",
  messagingSenderId: "395878082475",
  appId: "1:395878082475:web:ab6a4bf58972486da014ee",
  measurementId: "G-9PTHR75W35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getStorage(app);
export default analytics;
