import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkg0IqiisGudv8J9mxtTndfAP8HXwL5bo",
    authDomain: "slack-clone-d93f7.firebaseapp.com",
    projectId: "slack-clone-d93f7",
    storageBucket: "slack-clone-d93f7.appspot.com",
    messagingSenderId: "688363531270",
    appId: "1:688363531270:web:ba2c0808ece71b562f2787",
    measurementId: "G-ZVPW53LTEQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;