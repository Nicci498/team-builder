import React from "react";

export default function Card(props) {
  return (
    <div>
      {props.teamMembers.map(item => (
        <div key ={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.role}</p>
        </div>
      ))}
    </div>
  );
}


