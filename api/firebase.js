import { applicationDefault, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

export const app = initializeApp({
  credential: applicationDefault(),
  // databaseURL: 'https://knead-to-know.firebaseio.com'
});

export const db = getFirestore(app, "knead-to-know");