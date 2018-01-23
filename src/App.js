import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import TaskDetails from './TaskDetails'
import TasksList from './TasksList'
import About from './About'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <p className='App-intro'>
          <NavBar />
          <Switch>
            <Route
              exact path='/'
              component={Home}
            />
            <Route
              path='/Tasks'
              component={TasksList}
            />
            <Route
              path='/Tasks/:title'
              component={TaskDetails}
            />
            <Route
              path='/About'
              component={About}
            />
          </Switch>

        </p>
      </div>
    )
  }
}

export default App
