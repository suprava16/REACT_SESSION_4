import React from "react"
import Welcome,{Welcometwo} from "./Components/Welcome"
class App extends React.Component {
  render() {
    return (
      <div>
          <Welcome />
          <Welcometwo/>
      </div>
    )
  }
}
export default App