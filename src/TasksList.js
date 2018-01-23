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
        tasks: res.data
      })
    })
  }
  render () {
    let tasks
    if (this.state.tasks) {
      tasks = this.state.tasks.map((tasks, i) => {
        return <TaskDetails task={tasks} key={i} />
      })
    }
    return (
      <div>
        <div className='TaskDetails'>
          {tasks}
        </div>
      </div>
    )
  }
}

export default TasksList
