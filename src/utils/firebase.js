import firebase from "react-native-firebase";

import config from "../../config";

export const firebaseApp = firebase.initializeApp({
  apiKey: config.FIREBASE_API_KEY,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID
});

export const firebaseDB = firebaseApp.database();
