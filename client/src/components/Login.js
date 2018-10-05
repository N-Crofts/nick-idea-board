import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from './Navbar'

const StyledLogin = styled.div`
.loginContainer {
    padding-left: 5vw;
}

h1 {
    font-size: 35px;
}
`


export default class Login extends Component {
  state = {
      users: [],
      newUser: {}
  }

componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
}

handleChange = (event) => {
    const newUser = { ...this.state.newUser }
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
}

handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/users', this.state.newUser)

    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users })
}

  render() {
    const usersList = this.state.users.map((user, i) => {
        return (
            <div>
                <Link to={`/users/${user._id}`} key={i}>
                    Name: {user.userName}
                </Link>
            </div>
        )
    })
    

    return (
      <StyledLogin>
        <Navbar />
        <div class="loginContainer">
        <h1>Login Page</h1>
        {usersList}
        <form onSubmit={this.handleSubmit}>
            <input
                type='text'
                name='userName'
                placeholder='e n t e r   y o u r   n a m e   h e r e'
                value={this.state.newUser.userName} 
                onChange={this.handleChange} />
            <input type='submit' value='Create New User' />
        </form>
        </div>
      </StyledLogin>
    )
  }
}
