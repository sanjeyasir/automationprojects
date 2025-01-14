
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDLjWnzbOrSFBIWsZyhKoJRSkwaitiJl_8",
    authDomain: "automation-projects-sanjey.firebaseapp.com",
    databaseURL: "https://automation-projects-sanjey-default-rtdb.firebaseio.com",
    projectId: "automation-projects-sanjey",
    storageBucket: "automation-projects-sanjey.firebasestorage.app",
    messagingSenderId: "516068876151",
    appId: "1:516068876151:web:3fd326348e48feedaf4b72",
    measurementId: "G-HNB51V3NRK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);