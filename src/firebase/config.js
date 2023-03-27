
// import {initializeApp} from 'firebase/app'
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBOqzK_nhCfsDWSWgBv94o2qeTRAnM9xAQ",
    authDomain: "olx-clone-1f3e7.firebaseapp.com",
    projectId: "olx-clone-1f3e7",
    storageBucket: "olx-clone-1f3e7.appspot.com",
    messagingSenderId: "243528500404",
    appId: "1:243528500404:web:901765c26af1ff9eff43e1"
  };

  export default firebase.initializeApp(firebaseConfig)
  // export default initializeApp(firebaseConfig)