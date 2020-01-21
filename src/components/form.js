import React, {useState} from 'react';

const Form = props => {
    // console.log("this is our props",props);
    const [newMem, setNewMem] = useState({
      name: "",
      email: "",
      role:""
    });
  
    const handleChanges = e => {
      setNewMem({
        ...newMem,
        [e.target.name]: e.target.value
      });
      // console.log(e.target.value);
    };
    const submitForm = e => {
      e.preventDefault();
      console.log(newMem)
      props.addNewMember(newMem);      
      setNewMem({ name: "", email: "", role: "" });
    };
  
    return (
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          onChange={handleChanges}
          name="name"
          value={newMem.name}
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type = "text"
          name="email"
          placeholder="email"
          onChange={handleChanges}
          value={newMem.email}
        />
         <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          placeholder="role"
          onChange={handleChanges}
          name="role"
          value={newMem.role}
        />
        <button type="submit">Add New Member</button>
      </form>
    );
  };
  
  export default Form;
  



// const [data, setData]= useState({
    // name:'',
    // email:'',
    // role:''
    // });
    // const onInputChange = event => {        
    // setData({
    //     ...data,
    //     [event.target.name]: event.target.value,
    // });

    // return(
    //     <form>
    //         <input onChange={onInputChange} name="name" id ="name" placeholder="name"></input>
    //         <input onChange={onInputChange} name="email" id ="email" placeholder="email"></input>
    //         <input onChange={onInputChange} name="role" id ="role" placeholder="role" ></input>
    //     </form>
    // )}