import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyAcb3T0NV0VK3t2E6CZnYOUntX6MFwmQbM",
  authDomain: "rate-20200310.firebaseapp.com",
  databaseURL: "https://rate-20200310.firebaseio.com",
  projectId: "rate-20200310",
  storageBucket: "rate-20200310.appspot.com",
  messagingSenderId: "851101231561",
  appId: "1:851101231561:web:465c62ce27e2385177e018"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in the database where a user might be
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch a document from that location
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
