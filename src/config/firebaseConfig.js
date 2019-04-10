import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyB4weXJ5vBVo0hex0Y1h2b-tncIF3OGU1g",
  authDomain: "internet-store-62659.firebaseapp.com",
  databaseURL: "https://internet-store-62659.firebaseio.com",
  projectId: "internet-store-62659",
  storageBucket: "internet-store-62659.appspot.com",
  messagingSenderId: "426370427599"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase
