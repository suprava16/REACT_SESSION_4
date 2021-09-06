import React from "react"
import Welcome,{Welcometwo} from "./Components/Welcome"
import PassingProps from "./Components/Props/PassingProps"
import StateVariable from "./Components/State/StateVariable"
import SetStateMethod from "./Components/State/SetStateMethod"
import ChangeEvent from "./Components/State/ChangeEvent"
import Add from "./Components/State/Add"
import Array from "./Components/Array/Array"
import ArrayOfObjects from "./Components/Array/ArrayOfObjects"
import ConditionalRendering from "./Components/ConditionalRendering/ConditionalRendering"
import TodoObject from "./Components/Array/TodoObject"
import Main from "./Components/LifeCycle/Main"
import FetchApi from "./Components/Api/fetch_api"
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
          {/* <ArrayOfObjects/> */}
          {/* <ConditionalRendering/> */}
          {/* <TodoObject/> */}
          {/* <Main/> */}
          <FetchApi/>
      </>
    )
  }
}
export default App

