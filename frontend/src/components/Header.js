import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer' }}
          >
            ProShop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav className='ms-auto' navbarScroll>
              <Nav.Link onClick={() => navigate('/cart')}>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link onClick={() => navigate('/login')}>
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
