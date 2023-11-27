import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import Logo from "../../../assets/react.svg"
export const Header = () => {
  return (
    <div>
      <>
  <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src={Logo}
        style={{
          height: 40,
          width: 40
        }}
      />EMPLOYES
    </NavbarBrand>
  </Navbar>
 
</>
    </div>
  )
}

