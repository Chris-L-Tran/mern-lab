import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {API} from './urls'
import axios from 'axios'
import './AddTask.css'

class AddTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    axios.post(API, this.state)
    .catch(err => console.log(err))
    .then(res => {
      this.setState({...res.data})
      this.props.history.push('/')
    })
  }
  render () {
    return (
      <div>
        <h2>Add a new Task </h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input name='title' placeholder='title' onChange={(e) => this.handleChange(e)} />
          <input className='submit' type='submit' value='Add' />
        </form>
      </div>
    )
  }
}
