import React, {useState} from 'react';

import './App.css';
import Card from './components/card';
import Form from "./components/form";

export default function App() {
  const [team, setTeam] = useState([
    {
      id:1,
      name:'Nicole',
      email: 'nicci498@gmail.com',
      role: 'Front End',   
      
    },
    {
      name: '', 
      email: '',
      role: ''
    }
  ]);

  const addNewMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeam([...team, newMember]);
  };
 
  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewMember={addNewMember}  />
      <Card teamMembers = {team}/>
    </div>
  );}








//   const team = [{
//     name:'Nicole',
//     email: 'nicci498@gmail.com',
//     role: 'Front End'
//   }]

//   // Import the useState hook and set up a state property for your team members list

//   // Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them
//   const [members, setMembers] = useState({
//     name:'',
//     email:'',
//     role:''
//   })
//   return (
//     <div className="App">

//     <Card teamMembers = {team}/>
//     <Form />
//     </div>
//   );
