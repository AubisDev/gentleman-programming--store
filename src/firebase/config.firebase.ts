import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "interview-gp-challenge",
  storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID 
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);