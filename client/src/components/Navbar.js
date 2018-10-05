import React, { Component } from 'react'
import styled from 'styled-components'

///// STYLED VERSION OF OUR NAVBAR COMPONENT ///
///// USING INSTALLED STYLED-COMPONENTS. ///////

const StyledNavbar = styled.div`
.col {
    padding-left: 5vw;
}
`

///// NAVBAR COMPONENT DEFINED. ////////////////
///// ALSO RENDERED USING MATERIALIZED. ////////

export default class Navbar extends Component {
  render() {
    return (
      <StyledNavbar>
        <nav>
          <div class="nav-wrapper">
            <div class="col s12">
              <a href="/" class="breadcrumb">Home</a>
              <a href="/login" class="breadcrumb">Users</a>
            </div>
          </div>
        </nav>
      </StyledNavbar>
    )
  }
}
