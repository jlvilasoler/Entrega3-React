import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAP4mq1SLqLWHlMQ8XE0w1oMpScFvevftw",
    authDomain: "tiendaonline-62cee.firebaseapp.com",
    projectId: "tiendaonline-62cee",
    storageBucket: "tiendaonline-62cee.appspot.com",
    messagingSenderId: "51089463375",
    appId: "1:51089463375:web:c4270dccfe424fcc35323a",
    measurementId: "G-VEBJQ99DHM"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
