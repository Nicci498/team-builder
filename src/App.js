import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const team = [{
    name:'Nicole',
    email: 'nicci498@gmail.com',
    role: 'Front End'
  }]

  // Import the useState hook and set up a state property for your team members list

  // Give the state variable you just declared a default value. You will need to keep track of a list of team members and each team member will have several key/value pairs associated with them
  const [members, setMembers] = useState({
    name:'',
    email:'',
    role:''
  })
  return (
    <div className="App">

    </div>
  );
}

export default App;
