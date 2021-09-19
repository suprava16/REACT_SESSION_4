import React, { Component } from 'react'
import {BrowserRouter,Route,Link,Redirect,Switch} from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
export default class Routing extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
      <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home/> */}
          </Route>
          <Route exact path="/about" component={About}>
            {/* <About/> */}
          </Route>
          <Route exact path="/contact" component={Contact}>
            {/* <Contact/> */}
          </Route>
          {/* <Redirect to="/"></Redirect> */}
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect to="/notfound"></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
