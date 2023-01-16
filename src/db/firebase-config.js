import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA3EbcKetI3d3208H6ZnuheLOKNZL4lasY",
    authDomain: "e-commerce-1e54e.firebaseapp.com",
    projectId: "e-commerce-1e54e",
    storageBucket: "e-commerce-1e54e.appspot.com",
    messagingSenderId: "36677268784",
    appId: "1:36677268784:web:29b72bc55162f647bec4f5"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);