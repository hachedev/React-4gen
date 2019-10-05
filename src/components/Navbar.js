import React, { Component } from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'
import NavbarToggler from './NavbarToggler'

import NavbarNav from './NavbarNav'
import NavbarNavItem from './NavbarNavItem'
import NavbarNavLink from './NavbarNavLink'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      options: [
        { to: '/action', text: 'Action'},
        { to: '/another-action', text: 'Another action'},
        { divider: true },
        { to: '/something-else-here', text: 'Something else here'}
      ]
    }
  }

  toggleDropdownActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavbarBrand />

        <NavbarToggler
          dataTarget="navbar"
          ariaControls="#navbar"
          ariaLabel="navbar"
        />

        <NavbarCollapse id="navbar">
          <NavbarNav>
            <NavbarNavItem active>
              <NavbarNavLink
                to="https://github.com/"
                text="Github"
                label="go to home page (current)"
              />
            </NavbarNavItem>

            <NavbarNavItem>
              <NavbarNavLink
                to="/create"
                text="Crear Repo"
                label="go to link page"
              />
            </NavbarNavItem>
            <NavbarNavItem>
              <NavbarNavLink
                to="/"
                text="Ver Repos"
                label="go to link page"
              />
            </NavbarNavItem>
          </NavbarNav>
        </NavbarCollapse>
      </nav>
    )
  }
}

export default Navbar
