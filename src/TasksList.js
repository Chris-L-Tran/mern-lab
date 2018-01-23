import React, {Component} from 'react'
import TaskDetails from './TaskDetails'
import {API} from './urls'
import axios from 'axios'
import {Route} from 'react-router-dom'

class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount () {
    axios.get(API)
    .catch(err => console.log(err))
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
        <div className='TasksList'>
          {tasks}
        </div>
        <Route component={AddTask} />
      </div>
    )
  }
}

export default TasksList
