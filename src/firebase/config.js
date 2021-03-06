import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'recipe-bro-site.firebaseapp.com',
  projectId: 'recipe-bro-site',
  storageBucket: 'recipe-bro-site.appspot.com',
  messagingSenderId: '131569361976',
  appId: process.env.FIREBASE_APP_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
