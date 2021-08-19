import React from "react"
import Welcome,{Welcometwo} from "./Components/Welcome"
import PassingProps from "./Components/Props/PassingProps"
import StateVariable from "./Components/State/StateVariable"
import SetStateMethod from "./Components/State/SetStateMethod"
import ChangeEvent from "./Components/State/ChangeEvent"
import Add from "./Components/State/Add"
import Array from "./Components/Array/Array"
import ArrayOfObjects from "./Components/Array/ArrayOfObjects"
class App extends React.Component {
  render() {
    return (
      <>
          {/* <Welcome />
          <Welcometwo/> */}
          {/* <PassingProps name="" roll={202}/> */}
          {/* <PassingProps name="sriya" roll={204}/>
          <PassingProps name="Rima" roll={205}/> */}
          {/* <StateVariable/> */}
          {/* <SetStateMethod/> */}
          {/* <ChangeEvent/> */}
          {/* <Add/> */}
          {/* <Array/> */}
          <ArrayOfObjects/>
      </>
    )
  }
}
export default App

