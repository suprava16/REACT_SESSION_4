import React from "react"
import Welcome,{Welcometwo} from "./Components/Welcome"
import PassingProps from "./Components/Props/PassingProps"
class App extends React.Component {
  render() {
    return (
      <>
          {/* <Welcome />
          <Welcometwo/> */}
          <PassingProps name="suprava" roll={202}/>
          {/* <PassingProps name="sriya" roll={204}/>
          <PassingProps name="Rima" roll={205}/> */}
      </>
    )
  }
}
export default App

