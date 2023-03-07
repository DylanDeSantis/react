// import { initializeApp } from "firebase/app"

// const firebaseConfig = {
//   apiKey: "AIzaSyCEQ6jKqvsF-aVdYnpZetYWLn_ycecEC8A",
//   authDomain: "proyecto-react-87d90.firebaseapp.com",
//   projectId: "proyecto-react-87d90",
//   storageBucket: "proyecto-react-87d90.appspot.com",
//   messagingSenderId: "325115377281",
//   appId: "1:325115377281:web:7fe3353727c5f4783d7f80"
// }

// const db = initializeApp(firebaseConfig)

// export default db;

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEQ6jKqvsF-aVdYnpZetYWLn_ycecEC8A",
  authDomain: "proyecto-react-87d90.firebaseapp.com",
  projectId: "proyecto-react-87d90",
  storageBucket: "proyecto-react-87d90.appspot.com",
  messagingSenderId: "325115377281",
  appId: "1:325115377281:web:7fe3353727c5f4783d7f80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
