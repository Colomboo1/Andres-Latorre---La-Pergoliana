// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd5hwqpzSetSC8tG_M0V7sbKvDwbIr8oM",
    authDomain: "la-pergoliana.firebaseapp.com",
    projectId: "la-pergoliana",
    storageBucket: "la-pergoliana.appspot.com",
    messagingSenderId: "355980387815",
    appId: "1:355980387815:web:9a7e41bd81561f86298942",
    measurementId: "G-ETPPY5WGNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default db;