import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn-fBUWFaXmpn0-p7zhaAcH-IqalHAlmc",
  authDomain: "it-class-19dcf.firebaseapp.com",
  projectId: "it-class-19dcf",
  storageBucket: "it-class-19dcf.appspot.com",
  messagingSenderId: "1029514650420",
  appId: "1:1029514650420:web:c6fc1906c393bfba203b61",
  measurementId: "G-KKT079FJF3"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
