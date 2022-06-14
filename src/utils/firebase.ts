import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
const firebaseConfig = {
    apiKey: import.meta.env["API_KEY"],
    authDomain: "noteit-7didier.firebaseapp.com",
    databaseURL: import.meta.env["API_URL"],
    projectId: "noteit-7didier",
    storageBucket: "noteit-7didier.appspot.com",
    messagingSenderId: "550104670249",
    appId: "1:550104670249:web:8979b9d1b92797b6467c38"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const fbRef = ref;

export { app, db, fbRef, set, onValue };