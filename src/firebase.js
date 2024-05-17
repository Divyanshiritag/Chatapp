import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDyVLUpkM9OkgKfqiHfQDxzL_txMbRUoV4",
  authDomain: "chatapp-div.firebaseapp.com",
  projectId: "chatapp-div",
  storageBucket: "chatapp-div.appspot.com",
  messagingSenderId: "273219232806",
  appId: "1:273219232806:web:2300ffdd9641ac4d0772e7",
  measurementId: "G-ZEP9W25PS4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);