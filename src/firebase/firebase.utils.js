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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase