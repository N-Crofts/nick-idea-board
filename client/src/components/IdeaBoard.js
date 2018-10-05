import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from './Navbar'

///// STYLED VERSION OF OUR IDEA COMPONENT /////
///// USING INSTALLED STYLED-COMPONENTS. ///////

const StyledIdea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  width: 30vw;
`

///// IDEA BOARD COMPONENT IS DEFINED. WE SET ///////
///// THE STATE AS AN OBEJECT CONTAINING AN EMPTY ///
///// OBJECT (USER) AND AN EMPTY ARRAY (IDEAS). /////

export default class IdeaBoard extends Component {
  state = {
    user: {},
    ideas: []
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ 
      user: response.data,
      ideas: response.data.ideas.reverse()
     })
  }

  componentDidMount = () => {
    this.getUser()
  }

  handleNew = async () => {
    const userId = this.props.match.params.userId
    const newIdea = await axios.post(`/api/users/${userId}/ideas`)
    await this.getUser()
  }

  handleDelete = async (ideaId) => {
    const userId = this.props.match.params.userId
    await axios.delete(`/api/users/${userId}/ideas/${ideaId}`)
    await this.getUser()
  }

  handleChange = (event, i) => {
    // take it out
    const ideas = [...this.state.ideas]
    // change it
    ideas[i][event.target.name] = event.target.name
    // put it back
    this.setState({ ideas })
  }

  updateIdea = async (i) => {
    const userId = this.props.match.params.userId
    const updatedIdea = this.state.ideas[i]
    await axios.put(`/api/users/${userId}/ideas/${updatedIdea._id}`, updatedIdea)
  }

  render() {
    const ideasList = this.state.ideas.map((idea, i) => {
      return (
        <StyledIdea key={i}>
          <div onClick={() => this.handleDelete(idea._id)}> X </div>

            <input type='text' name='title' value={idea.title} 
             onChange={(event) => this.handleChange(event, i)}
             onBlur={() => this.updateIdea(i)} />

            <input type='text' name='description' value={idea.description} 
             onChange={(event) => this.handleChange(event, i)}
             onBlur={() => this.updateIdea(i)} />
        </StyledIdea>
      )
    })

    return (
      <div>
        <Navbar />
        <h1>Idea Board for {this.state.user.userName}</h1>
        {ideasList}
      </div>
    )
  }
}
