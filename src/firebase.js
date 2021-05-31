import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiw-rGjiwpKLx97uUmO_9Q9R-tambPYKk",
  authDomain: "snapchat-ce14c.firebaseapp.com",
  projectId: "snapchat-ce14c",
  storageBucket: "snapchat-ce14c.appspot.com",
  messagingSenderId: "985755771794",
  appId: "1:985755771794:web:80d031b5f44251655f174b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
