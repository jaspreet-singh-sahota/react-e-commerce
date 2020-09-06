import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCn7xcULiExzTpPfFT_ZrEPPEN74VKrcwc",
  authDomain: "jassi-react-e-commerce.firebaseapp.com",
  databaseURL: "https://jassi-react-e-commerce.firebaseio.com",
  projectId: "jassi-react-e-commerce",
  storageBucket: "jassi-react-e-commerce.appspot.com",
  messagingSenderId: "965846020081",
  appId: "1:965846020081:web:eff274d22272972d101e50",
  measurementId: "G-CV3ZRW2WNX"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase