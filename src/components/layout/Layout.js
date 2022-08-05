import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Row, Col, Navbar, Nav, Container } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import './layout.css';



const Layout = () => {
    return (
        <Navbar bg='dark' variant='dark' >
            <Container>
                <Navbar.Brand href="#home">React-1  <FaReact /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Layout