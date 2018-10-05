import React, { Component } from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

///// STYLED VERSION OF OUR HOME PAGE //////
///// USING IMPORTED STYLED-COMPONENTS /////

const StyledHome = styled.div`
h1 {
    padding-left: 5vw;
    font-size: 35px;
}
`

///// THE HOME COMPONENT DEFINED AND RENDERED WITH OUR /////
///// STYLED VERSION, AS WELL AS OUR IMPORTED NAVBAR. //////

export default class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Navbar />
        <h1>Welcome!</h1>
      </StyledHome>
    )
  }
}
