import React from "react";
import { useState } from "react";

const User = (props) => {
  let [name, setName] = useState("Ghufran");
  let [age, setAge] = useState(20);

  // let name = "Ghufran";

  
  function updateName() {
    setName(props.name);
    console.log("New name is " + name);
  }

  function updateAge() {
    setAge(props.age);
    console.log("New age is " + age);
  }

  return (
    <div className="user">
      <h1>{name}</h1>
      <h2>{age}</h2>
      <button onClick={updateName}>click</button>
      <button onClick={updateAge}>click</button>
    </div>
  );
};

export default User;
