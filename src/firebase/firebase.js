import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAjNSzyV4X15XFj8Y6eFVVT3RdxFcyrsW4",
  authDomain: "trips-94a46.firebaseapp.com",
  databaseURL: "https://trips-94a46.firebaseio.com",
  projectId: "trips-94a46",
  storageBucket: "trips-94a46.appspot.com",
  messagingSenderId: "250994199457"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
