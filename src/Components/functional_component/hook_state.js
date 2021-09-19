import React,{useState} from "react"

function Hook_State(){
  const[name,setName]=useState("suprava")
  const[email,setEmail]=useState("suprava@gmail.com")

const handleClick=()=>{
  setName("Rima");
}

  return(
    <div>
      <h1>My name is {name} .your email id is {email}</h1>
    <button onClick={handleClick}>Update</button>
    </div>
  )
 
}
export default Hook_State