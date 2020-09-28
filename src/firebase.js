import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCfZKRrkBbCc-jer4MdJmQW_wg2rmtN2qM",
    authDomain: "thh-form-cf94e.firebaseapp.com",
    databaseURL: "https://thh-form-cf94e.firebaseio.com",
    projectId: "thh-form-cf94e",
    storageBucket: "thh-form-cf94e.appspot.com",
    messagingSenderId: "304169689960",
    appId: "1:304169689960:web:60ed8c20f34d4ea79eecdd"

});

var db = firebaseApp.firestore();

export { db };