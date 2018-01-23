import React, {Component} from 'react'
import './NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <div>
        <nav>
          <div class='nav-wrapper'>
            <a href='/#' class='brand-logo'>Chris' Tasks</a>
            <ul class='right hide-on-med-and-down'>
              <li><a href='/tasks'>Tasks List</a></li>
              <li><a href='/about'>About</a></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
