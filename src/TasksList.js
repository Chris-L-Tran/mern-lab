import React, {Component} from 'react'
import TaskDetails from './TaskDetails'

class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tasks: []
    }
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
