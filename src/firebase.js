import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXlHoq4YHnHzXjr1InHZMGtt1jayn3WZc",
    authDomain: "linkedin-2e528.firebaseapp.com",
    projectId: "linkedin-2e528",
    storageBucket: "linkedin-2e528.appspot.com",
    messagingSenderId: "958655890597",
    appId: "1:958655890597:web:02e5c1b79994e8443f794c",
    measurementId: "G-EPEKGB18CK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };