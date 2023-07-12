import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";




const firebaseConfig = {
  apiKey: "AIzaSyB1D4--JDiduGc-6bmfd4Wc2HxYpN3erQU",
  authDomain: "seamless-customer-support.firebaseapp.com",
  databaseURL: "https://seamless-customer-support-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "seamless-customer-support",
  storageBucket: "seamless-customer-support.appspot.com",
  messagingSenderId: "1065110356660",
  appId: "1:1065110356660:web:f42ca6c959757f8f7fcde1",
  measurementId: "G-0GN5Y1J0W7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

