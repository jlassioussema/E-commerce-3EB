import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmgKzRaBn0kDe973-_vTioEUUdajKN1CU",
    authDomain: "firebas-eb7dd.firebaseapp.com",
    projectId: "firebas-eb7dd",
    storageBucket: "firebas-eb7dd.appspot.com",
    messagingSenderId: "1030280650585",
    appId: "1:1030280650585:web:f228fbaeaf9d0a0066b648",
    measurementId: "G-LVKC5VD4MP"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
