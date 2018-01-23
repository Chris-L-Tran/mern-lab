import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'
import TaskDetails from './TaskDetails'
import TasksList from './TasksList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <NavBar />
          <Home />
          <Switch>
            <Route
              path='/Tasks'
              component={TasksList}
            />
            <Route
              path='/Tasks/:title'
              component={TaskDetails}
            />
          </Switch>

        </p>
      </div>
    )
  }
}

export default App
