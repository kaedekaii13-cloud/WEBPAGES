// ==========================================================================
// Hello Kaffi — Firebase Configuration
// ==========================================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGcDVhzBzfiIKIrEiyc31YAg28i5YBpqs",
  authDomain: "webpages-e72db.firebaseapp.com",
  projectId: "webpages-e72db",
  storageBucket: "webpages-e72db.appspot.com",
  messagingSenderId: "966898943973",
  appId: "1:966898943973:web:50056984ad6ff57a9f910c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export { app, auth, db, googleProvider };