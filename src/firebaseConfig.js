import firebase from 'firebase';

const firebaseApp = {
    apiKey: "AIzaSyB-_x4zOcA9WDkqFNjW69T1ffEWwxQYrIQ",
    authDomain: "evernote-clone-adee6.firebaseapp.com",
    projectId: "evernote-clone-adee6",
    storageBucket: "evernote-clone-adee6.appspot.com",
    messagingSenderId: "724387329351",
    appId: "1:724387329351:web:e8fbf389557f9eb3180862"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export {db};

