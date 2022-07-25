import { useEffect, useState } from "react"
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const Register=()=> {

    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newAge, setNewAge] = useState(0)
    const [newPhoneNumber, setNewPhoneNumber] = useState("")

  const [Employee, setEmployee] = useState([]);
  const  EmployeeCollectionRef = collection(db, "Employee");



  const createEmployee = async () => {
    await addDoc(EmployeeCollectionRef, { First_Name: newFirstName, Last_Name: newLastName, Age: Number(newAge), Phone_Number: newPhoneNumber});

  };


    return(

        <div>
            <form>
    <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">First Name</label>
    <div class="col-sm-5">
      <input type="name" class="form-control" id="name" placeholder='Enter Your First Name' onChange={(event) => {setNewFirstName(event.target.value);}} />
    </div>
     </div>

     <div class="row mb-3">
    <label for="name" class="col-sm-2 col-form-label">Last Name</label>
    <div class="col-sm-5">
      <input type="name" class="form-control" id="name" placeholder='Enter Your Last Name' onChange={(event) => {setNewLastName(event.target.value);}} />
      </div></div>

      <div class="row mb-3">
    <label for="age" class="col-sm-2 col-form-label">Age</label>
    <div class="col-sm-5">
      <input type="number" class="form-control" id="age"  placeholder='Enter Your Age' onChange={(event) => {setNewAge(event.target.value);}} />
      </div></div>

      <div class="row mb-3">
    <label for="pnumber" class="col-sm-2 col-form-label">Phone Number</label>
    <div class="col-sm-5">
      <input class="form-control" id="pnumber" placeholder='Enter Your Phone Number' onChange={(event) => {setNewPhoneNumber(event.target.value);}} /><br /><br/>
  </div></div>

      <button type='button' class="btn btn-primary" onClick={createEmployee}>Add User</button><br></br><br></br>

      </form>
        </div>
    );
}

export default Register;


