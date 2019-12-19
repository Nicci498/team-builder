import React from 'react';

export default function Form(){
    // const [data, setData]= useState({
    // name:'',
    // email:'',
    // role:''
    // });
    const onInputChange = event => {        
    setMembers({
        ...members,
        [event.target.name]: event.target.value,
    });

    return(
        <form>
            <input onChange={onInputChange} name="name" id ="name" placeholder="name"></input>
            <input onChange={onInputChange} name="email" id ="email" placeholder="email"></input>
            <input onChange={onInputChange} name="role" id ="role" placeholder="role" ></input>
        </form>
    )
}}