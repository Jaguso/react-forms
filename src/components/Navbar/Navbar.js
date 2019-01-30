import React, { Component } from 'react';
// import './style.scss';

class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Forms</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">Pictures</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;