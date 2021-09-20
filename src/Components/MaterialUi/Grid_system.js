import React, { Component } from 'react'
import { Grid, Box } from '@mui/material';


export default class Grid_system extends Component {
  render() {
    return (
      <div>
        {/* <Grid container style={{border:"3px solid green"}}>
          <Grid item xs={12} md={6} lg={4} style={{border:"1px solid red"}}>
            hello
          </Grid>
          <Grid item xs={12} md={6} lg={4} style={{border:"1px solid red"}}>
            hello
          </Grid>
        </Grid> */}

        <Grid container>
          <Grid item xs={12} md={6} lg={3}>
            <Box boxShadow={3} m={2} p={3} fontSize={15}>
              A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box boxShadow={3} m={2} p={3} fontSize={15}>
              A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box boxShadow={3} m={2} p={3} fontSize={15}>
              A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Box boxShadow={3} m={2} p={3} fontSize={15}>
              A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.
            </Box>
          </Grid>
        </Grid>
      </div>
    )
  }
}
