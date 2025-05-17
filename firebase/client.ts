import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSWzKj3f5dx6yDAK07cvriG7Vrw8LCkJ4",
  authDomain: "prepwise-7c8fc.firebaseapp.com",
  projectId: "prepwise-7c8fc",
  storageBucket: "prepwise-7c8fc.firebasestorage.app",
  messagingSenderId: "112270263269",
  appId: "1:112270263269:web:abf249eb920673581ce50c",
  measurementId: "G-B7B5FS919Q"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)