import React from "react"
export default class TodoObject extends React.Component{
  constructor(){
    super();
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      this.state={
        task_arr:[],
       
        arr:[
          {
            input_text:"",
            input_date:date,
            input_time:""
          }
        ],
        completed_arr:[]
      }

  }
  handleTask=(event)=>{
    this.setState({
    arr:{...this.state.arr,input_text:event.target.value}
    })
  }

  handleDate=(event)=>{
    this.setState({
      arr:{...this.state.arr,input_date:event.target.value}
    })
  }

  render(){
    console.log(this.state.arr.input_text)
    console.log(this.state.arr.input_date)
    return(
      <div>
        <input type="text" onChange={this.handleTask}/>
        <input type="date" onChange={this.handleDate}/>
        <input type="time" onChange={this.handleTime}/>
        {/* <button onClick={this.handleClick}>Add</button> */}
      </div>
    )
  }
}