import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzOGVWGIGky1tW15AxqJ0fK1KAwVqpQfE",
  authDomain: "moba-388af.firebaseapp.com",
  projectId: "moba-388af",
  storageBucket: "moba-388af.appspot.com",
  messagingSenderId: "1061465410276",
  appId: "1:1061465410276:web:819c6fabea1362da2f7af1",
  measurementId: "G-XHTMB9BLJD"
};

export const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
