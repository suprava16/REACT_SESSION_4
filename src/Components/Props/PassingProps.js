import React from "react"
import SecondComponent from "./SecondComponent";
import PropTypes from "prop-types"
class PassingProps extends React.Component{
  render(){
    console.log(this.props)
    const{name,roll}=this.props
    return(
      <div>
        {/* <h1>welcome {this.props.name} and your roll number is {this.props.roll}</h1> */}
        <h1>welcome {name} and your roll number is {roll}</h1>
        <SecondComponent value={this.props}/>
      </div>
    )
  }
}

PassingProps.propTypes={
  name:PropTypes.string
}


export default PassingProps;

