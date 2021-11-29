import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='#'>ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ml-auto' navbarScroll>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
