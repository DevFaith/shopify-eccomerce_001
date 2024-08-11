import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCE7FJjN_XDNXXh-9WB5lY5WM0OIQyhuCY",
    authDomain: "shopify-app-dd50e.firebaseapp.com",
    projectId: "shopify-app-dd50e",
    storageBucket: "shopify-app-dd50e.appspot.com",
    messagingSenderId: "250382669649",
    appId: "1:250382669649:web:54701f61d3c350f5666570",
    measurementId: "G-3EBSZRB423"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();

// Google Sign-In Function
export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        // Handle user data here
    } catch (error) {
        console.error(error);
    }
};
