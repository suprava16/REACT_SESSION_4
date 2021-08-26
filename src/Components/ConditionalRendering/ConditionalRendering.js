import React from "react"
import "../Style.css"
const style={
  root:{
    color:"green",
    backgroundColor:"yellow",
    padding:40
  },
  paragraph:{
    color:"red",
    backgroundColor:"black"
  }
}
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
        {/* {this.state.isLoggedIn===true?<h1>heading</h1>:<h2>Else part</h2>}  */}
        {/* <input type="text" onChange={this.handleChange}/>
        <button disabled={this.state.input_text===""?true:false}>Add</button>  */}
        {/* {this.state.isLoggedIn===true &&
        <h1>single if statement</h1>} */}

        <h1 style={{backgroundColor:"red",marginTop:40,color:"white"}}>Heading</h1>
        <p style={style.paragraph}>hello everyone</p>
        <h2 className="heading">Heading 2</h2>
        <h1 style={style.root}>CSS OBJECT</h1>
      </div>
    )
  }
}
