import {db} from './firebase-config';
import { useState, useEffect } from 'react';
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';



export default function Manage(){



    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newAge, setNewAge] = useState(0)
    const [newPhoneNumber, setNewPhoneNumber] = useState("")
  
  const [Employee, setEmployee] = useState([]);
  const  EmployeeCollectionRef = collection(db, "Employee");



  const updateEmployee = async (id, Age) => {
    const empDoc = doc(db, "Employee", id)
    const newFields = {Age: Age + 1}
    await updateDoc(empDoc, newFields)
  };

  const deleteEmployee = async (id) => {
     const empDoc = doc(db, "Employee", id);
     await deleteDoc(empDoc);
  }
  


useEffect(() => {

      const getEmployee = async () => {
      const data = await getDocs(EmployeeCollectionRef);
      setEmployee(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

     };

     getEmployee();

  }, [EmployeeCollectionRef] );




    return (
        <div className='manage'>
    {Employee.map((emp) => {
      return (

       
         
<ul className='list-group'>
      <div className='list-group-item'>
        
          <h6>Name : {emp.First_Name + " " + emp.Last_Name}</h6>
          <h6>Age : {emp.Age}</h6>
          <h6>Phone Number : {emp.Phone_Number}</h6>
          
        
          {" "}
        <button type="button" class=" btn btn-warning"onClick={() => {
          updateEmployee(emp.id, emp.Age);
          
        }}>
          {" "}
          Increase Your Age</button><br /><br />
          
          <button type="button" class="btn btn-danger" onClick={() => {
            deleteEmployee(emp.id);
          }}>
            Delete User
          </button>
         
        </div>
        </ul>
    
       
      );
    })}

<img className='img' src='./Images/001.jpg'></img>

        </div>
    );
};