import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {
  authButton(){
    if(this.props.authenticated){
      return <button onClick={() => this.props.authenticate(false)}>Sign out</button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign in</button>
  }

  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state){
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps, actions)(Header)