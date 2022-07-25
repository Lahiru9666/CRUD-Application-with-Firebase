
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBNxSX2TwDFq91LtgsWx9i_S0rqVAMtcx8",
  authDomain: "crud-project-1238f.firebaseapp.com",
  projectId: "crud-project-1238f",
  storageBucket: "crud-project-1238f.appspot.com",
  messagingSenderId: "11812915861",
  appId: "1:11812915861:web:41570c1414d0bfc629e99c",
  measurementId: "G-YZ00TE1JRJ"
}; 

  const app = initializeApp(firebaseConfig);  
  export const db = getFirestore(app);