import React from "react"
import Welcome,{Welcometwo} from "./Components/Welcome"
import PassingProps from "./Components/Props/PassingProps"
import StateVariable from "./Components/State/StateVariable"
import SetStateMethod from "./Components/State/SetStateMethod"
import ChangeEvent from "./Components/State/ChangeEvent"
class App extends React.Component {
  render() {
    return (
      <>
          {/* <Welcome />
          <Welcometwo/> */}
          {/* <PassingProps name="suprava" roll={202}/> */}
          {/* <PassingProps name="sriya" roll={204}/>
          <PassingProps name="Rima" roll={205}/> */}
          {/* <StateVariable/> */}
          {/* <SetStateMethod/> */}
          <ChangeEvent/>
      </>
    )
  }
}
export default App

