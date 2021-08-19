import React from "react"

export default class ArrayOfObjects extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [
        {
          name: "suprava",
          email: "suprava@gmail.com"
        },
        {
          name: "Rima",
          email: "Rima@gmail.com"
        },
        {
          name: "Sita",
          email: "Sita@gmail.com"
        },
        {
          name: "Rinky",
          email: "rinky@gmail.com"
        }

      ]
    }
  }
  handlePush = () => {
    var temp = this.state.user
    temp.push({
      name: "Sriya",
      email: "sriya@gmail.com"
    })
    this.setState({
      user: temp
    })
  }
  handlePop=()=>{
    var temp=this.state.user
    temp.pop()
    this.setState({
      user:temp
    })
  }
  render() {
    return (
      <div>
        {/* <ul><li>watching tv 
          <button onClick={(e)=>{this.handleClick(m,i)}}>completed</button></li></ul> */}
        <table border="1">
          <tr>
            <th>name</th>
            <th>email</th>
          </tr>
          {this.state.user.map((u, index) => (
            <>
              <tr>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            </>
          ))}
          <tr><td><button onClick={this.handlePush}>push</button></td>
          <td><button onClick={this.handlePop}>POP</button></td></tr>
        </table>
      </div>
    )
  }
}
