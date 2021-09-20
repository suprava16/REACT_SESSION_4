import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import { Button } from "@mui/material"
export default class Routing extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Link to="/">
            <Button
              style={{ marginRight: 5 }}
              variant="contained"
              color="secondary"
              size="small"
            >
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button
              style={{ marginRight: 5 }}
              variant="contained"
              color="secondary"
              size="small"
            >
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              style={{ marginRight: 5 }}
              variant="contained"
              color="secondary"
              size="small"
            >
              Contact
            </Button>
          </Link>
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
