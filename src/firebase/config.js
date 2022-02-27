import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'recipe-bro-site.firebaseapp.com',
  projectId: 'recipe-bro-site',
  appId: process.env.FIREBASE_APP_ID,
};
