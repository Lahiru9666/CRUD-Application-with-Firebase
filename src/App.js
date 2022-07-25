import { useState, useEffect } from 'react';
import './App.css';
import {db} from './firebase-config';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';
//import { async } from '@firebase/util';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manage from "./Manage";
import Home from "./Home";
import './styles.css';
import NavBar from './NavBar';
import Register from './Register';


function App() {

  const [newFirstName, setNewFirstName] = useState("")
  const [newLastName, setNewLastName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [newPhoneNumber, setNewPhoneNumber] = useState("")

const [Employee, setEmployee] = useState([]);
const  EmployeeCollectionRef = collection(db, "Employee");

const createEmployee = async () => {
await addDoc(EmployeeCollectionRef, { First_Name: newFirstName, Last_Name: newLastName, Age: Number(newAge), Phone_Number: newPhoneNumber});

};



  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;

      case "/Register":
        component = <Register />
      break;

      case "/Manage":
        component = <Manage />
    default:
      break;
  }
 


    const updateEmployee = async (id, Age) => {
    const empDoc = doc(db, "Employee", id)
    const newFields = {Age: Age + 1}
    await updateDoc(empDoc, newFields)
  };

     const deleteEmployee = async (id) => {
     const empDoc = doc(db, "Employee", id);
     await deleteDoc(empDoc);
  }
  
  return (
  <div>
    <NavBar />
    <div className="container">

    {component}
    </div>
    
    

  </div>
 
  );

};

export default App;
