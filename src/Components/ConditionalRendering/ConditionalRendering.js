import React from "react"

export default class ConditionalRendering extends React.Component{
  constructor(){
    super();
    this.state={
      isLoggedIn:false,
      input_text:""
    }
  }
  handleChange=(event)=>{
    this.setState({
        input_text:event.target.value
    })
  }
  render(){
    // if(this.state.isLoggedIn===true){
    //   return <h1>if statement</h1>
    // }
    // else{
    //   return <h1>else statement</h1>
    // }
    return(
      <div>
        {/* {this.state.isLoggedIn===true?<h1>heading</h1>:<h2>Else part</h2>}
        <input type="text" onChange={this.handleChange}/>
        <button disabled={this.state.input_text===""?true:false}>Add</button> */}
        {this.state.isLoggedIn===false &&
        <h1>single if statement</h1>}

      </div>
    )
  }
}
