import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfB5LFb651PyhgspM1Fwjmh7qlzhFSdjU",
    authDomain: "lourdestp-slack-clone.firebaseapp.com",
    projectId: "lourdestp-slack-clone",
    storageBucket: "lourdestp-slack-clone.appspot.com",
    messagingSenderId: "778969124405",
    appId: "1:778969124405:web:6a89e747f9a6544e41eb7c",
    measurementId: "G-DFYFK63XC5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;