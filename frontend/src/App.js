import React from "react"
import { Route, Redirect, Switch } from 'react-router-dom'

import { BackTracking, Greedy, BruteForce, DevideConquer, DynamicProgramming } from 'algorithm'

import { Home, Navigation, Counter, Todo, SignUp } from 'common'

import { Linear, Mathematics, Nonlinear } from 'dataStructure'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux' 
import { todoReducer, userReducer } from 'reducers'

const rootReducer = combineReducers({todoReducer, userReducer}) 
const store = createStore(rootReducer)

const App = () => ( <>
    <Provider store ={store}>
      <Navigation/>
        <Switch>
          <Route exact path='/' component= { Home }/>
          <Redirect from='/home' to= { '/' }/>

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
          <Route exact path='/SignUp' component= { SignUp }/>
        </Switch>
    </Provider>
</>)

export default App;
