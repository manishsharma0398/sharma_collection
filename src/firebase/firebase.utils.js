import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvhsqIPaORlOUZ76i4QpTB9ayimv9dsPM",
  authDomain: "sharma-collection.firebaseapp.com",
  databaseURL: "https://sharma-collection.firebaseio.com",
  projectId: "sharma-collection",
  storageBucket: "sharma-collection.appspot.com",
  messagingSenderId: "489386310696",
  appId: "1:489386310696:web:76116e8ce099ec9e54891d",
  measurementId: "G-2BDP9F9LLG",
};

// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);

//     this.auth = app.auth();
//     this.db = app.firestore();
//   }

//   signInWithGoogle = () => {
//     const provider = new app.auth.GoogleAuthProvider();
//     provider.setCustomParameters({ prompt: "select_account" });
//     this.auth.signInWithPopup(provider);
//   };
// }

!app.apps.length ? app.initializeApp(firebaseConfig) : app.app();

// app.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();

export const signInWithGoogle = () => {
  const provider = new app.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const userSnap = await userRef.get();
  // console.log(userSnap);

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default app;
