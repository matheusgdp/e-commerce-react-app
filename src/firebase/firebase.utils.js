import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB55-G9I_vsX3yxrUETCelxb59BWYA9gjE",
    authDomain: "crwn-db-6fb14.firebaseapp.com",
    databaseURL: "https://crwn-db-6fb14.firebaseio.com",
    projectId: "crwn-db-6fb14",
    storageBucket: "crwn-db-6fb14.appspot.com",
    messagingSenderId: "879388219229",
    appId: "1:879388219229:web:48bfec2fcfe9199d5b3ab4",
    measurementId: "G-QR5XR1N7DL"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;