import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  state = {
      users: []
  }
  render() {
    const usersList = this.state.users.map((user, i) => {
        return <div>Name: {user.userName}</div>
    })

    return (
      <div>
        <h1>Login Page</h1>
        {usersList}
        <Link to='/'>HOME</Link> 
      </div>
    )
  }
}
