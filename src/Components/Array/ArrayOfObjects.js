import React from "react"

export default class ArrayOfObjects extends React.Component{
  constructor(){
    super();
    this.state={
      user:[
        {
          name:"suprava",
          email:"suprava@gmail.com"
        },
        {
          name:"Rima",
          email:"Rima@gmail.com"
        },
        {
          name:"Sita",
          email:"Sita@gmail.com"
        },
        {
          name:"Rinky",
          email:"rinky@gmail.com"
        }

      ]
    }
  }
  render(){
    return(
      <div>
          {this.state.user.map((u,i)=>(
            <>
            <h1>{u.name}</h1>
            <p>{u.email}</p>
            </>
          ))}
      </div>
    )
  }
}