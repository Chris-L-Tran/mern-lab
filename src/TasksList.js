import React, {Component} from 'react'

class TasksList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render () {
    return (
      <div>
        This is the TasksList Page
      </div>
    )
  }
}

export default TasksList
