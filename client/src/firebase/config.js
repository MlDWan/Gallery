import firebase from "firebase";
import "firebase/auth";


const app = firebase.initializeApp( {
    apiKey: "AIzaSyBKmc8c0ucWqj4ABP2wA-LKI4o4KeTmYu4",
  authDomain: "gallery-a2b73.firebaseapp.com",
  projectId: "gallery-a2b73",
  storageBucket: "gallery-a2b73.appspot.com",
  messagingSenderId: "87585268450",
  appId: "1:87585268450:web:35f26ec47a2efe5acf74bb",
  measurementId: "G-5R34B97WLC"
});

export default app  