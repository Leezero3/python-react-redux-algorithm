import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'

import { BackTracking, Greedy, BruteForce, DevideConquer, DynamicProgramming } from 'algorithm'

import { Home, Navigation, Counter, Todo } from 'common'

import { Linear, Mathematics, Nonlinear } from 'dataStructure'

const App = () => ( <>
  <div>
    <Navigation/>
    <Switch>
      <Route exact path='/' component= { Home }/>
      <Redirect from='/home' to= { '/' }/>
      {/* <Route exact path='/home' component= { Home }/> */}

      <Route exact path='/to-do' component= { Todo }/>
      <Route exact path='/counter' component= { Counter }/>
      <Route exact path='/back-tracking' component= { BackTracking }/>
      <Route exact path='/brute-force' component= { BruteForce }/>
      <Route exact path='/divide-conquer' component= { DevideConquer }/>
      <Route exact path='/dynamic-programming' component= { DynamicProgramming }/>
      <Route exact path='/greedy' component= { Greedy }/>

      <Route exact path='/linear' component= { Linear }/>
      <Route exact path='/mathematics' component= { Mathematics }/>
      <Route exact path='/nonlinear' component= { Nonlinear }/>
    </Switch>
  </div>
</>)

export default App;
