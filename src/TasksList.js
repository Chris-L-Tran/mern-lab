import React, {Component} from 'react'
import TaskDetails from './TaskDetails'
import {API} from './urls'
import axios from 'axios'

class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount () {
    axios.get(API)
    .cath(err => console.log(err))
    .then((res) => {
      this.setState({
        paintings: res.data
      })
    })
  }
  render () {
    return (
      <div>
        <div className='TaskDetails'>
          {TaskDetails}
        </div>
      </div>
    )
  }
}

export default TasksList
