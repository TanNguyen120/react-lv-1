import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Row, Col, Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import './layout.css';



const Layout = () => {
    return (
        <Navbar variant='dark' className="header" >
            <Container>
                <Navbar.Brand href="#home">React-1  <FaReact /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Boring Stuff</Nav.Link>
                    <Nav.Link href="#pricing">News</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="dark"><GoSearch /></Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Layout