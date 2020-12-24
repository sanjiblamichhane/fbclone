import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAIgQYZZTd7H4g5YJUwbFrxiZ7u4OfW0Sk",
    authDomain: "merogb-bef1b.firebaseapp.com",
    databaseURL: "https://merogb-bef1b.firebaseio.com",
    projectId: "merogb-bef1b",
    storageBucket: "merogb-bef1b.appspot.com",
    messagingSenderId: "149672138965",
    appId: "1:149672138965:web:d61d9b1ba3bf1a810f6a5c",
    measurementId: "G-5EHGHCM46W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;