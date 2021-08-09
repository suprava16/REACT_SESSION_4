import React from "react"

class SecondComponent extends React.Component{
  render(){
    console.log(this.props.value.name)
    const{name,roll}=this.props.value
    return(
      <div>
      {/* <p> name from passingprops {this.props.value.name} {this.props.value.roll}</p> */}
      <p> name from passingprops {name} {roll}</p>
      </div>
    )
  }
}
export default SecondComponent