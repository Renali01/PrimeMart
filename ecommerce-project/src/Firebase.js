import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcjJa7-WT2a4_TO17kunhT50GiQ2NSEKQ",
  authDomain: "clone-e3ed3.firebaseapp.com",
  projectId: "clone-e3ed3",
  storageBucket: "clone-e3ed3.appspot.com",
  messagingSenderId: "75183775126",
  appId: "1:75183775126:web:791f8f610df0a6c2c111b7",
  measurementId: "G-SDJK1XE5C9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth};
