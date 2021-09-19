import React from "react"

function Hook_object(){
  const[user,setUser]=React.useState({fname:"suprava",lname:"padhi"})


  return(
    <div>
    <input type="text" value={user.fname} 
      onChange={(event)=>{
        setUser({
          ...user,
          fname:event.target.value
        })
      }}
    /> 
    <input type="text" value={user.lname}
     onChange={(event)=>{
        setUser({
          ...user,
          lname:event.target.value
        })
      }}
     /> 
      <h1>first name:{user.fname}</h1>
      <h1>last name: {user.lname}</h1>
    </div>
  )
}
export default Hook_object;