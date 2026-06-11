import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCfdetDqm_ldrGLwtzYtTJL4Tad0Q3GIxQ",
  authDomain: "ds-gadgets.firebaseapp.com",
  projectId: "ds-gadgets",
  storageBucket: "ds-gadgets.firebasestorage.app",
  messagingSenderId: "129602203125",
  appId: "1:129602203125:web:6630ac7fadcd25ecc884bc",
  measurementId: "G-727NV9G2SH"
};

export const ADMIN_EMAILS = [
  "pubwkon978@gmail.com",
];

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

export { signInWithPopup, signOut, onAuthStateChanged };
export { collection, addDoc, getDocs, query, orderBy, serverTimestamp };
