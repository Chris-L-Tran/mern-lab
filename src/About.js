import React, {Component} from 'react'

class About extends Component {
  render () {
    return (
      <div className='about'>
        <h1>About</h1>

        <h3>Greetings!</h3>

        <p>Thank you for visiting my task and to do site.</p>
        <p> After struggling around with trying to get an API connected and trying to understand axios and AJAX</p>
        <p>This site is designed to keep track of a set of to do lists.</p>
        <p>And keep track of the task in each list</p><br />
        <p>There are many features that I wish to include</p>
        <p>However, due to time constrains, the site is exteremely minimilist</p>

        <p> There are plenty of things I would like to add </p>
        <ol>
          <li>Checkbox memory</li>
          <li>Home Screen Decoration</li>
          <li>A parent schema that holds tasks</li>
          <li>Separate page to show list of task list</li>
          <li>Authentication</li>
          <li>Better css styles</li>
          <li>Add more details to each to do element, such as date due, priority, date created</li>
          <li>Add a more detailed display for each to do item</li>
        </ol>

      </div>
    )
  }
}

export default About
