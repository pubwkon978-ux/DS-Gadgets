// =============================================
// firebase-config.js
// =============================================
// ⚠️ මේ file එක ඔයාගේ Firebase project details
// වලින් update කරන්න!
// https://console.firebase.google.com/ යන්න
// =============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ⚠️ Replace these with YOUR Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ⚠️ ඔයාගේ admin email ලිස්ට් එකට add කරන්න
// (Google account email addresses)
export const ADMIN_EMAILS = [
  "youremail@gmail.com",
  // add more admin emails here if needed
];

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

// Auth helpers
export { signInWithPopup, signOut, onAuthStateChanged };
// Firestore helpers
export { collection, addDoc, getDocs, query, orderBy, serverTimestamp };
