
import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import { GoSearch } from 'react-icons/go';
import './layout.css';



const Layout = () => {
    const [search, setSearch] = useState('');
    console.log("rerender ", search);
    // useEffect là một hook của react 
    // useEffect nhận vào 2 tham số: 1. function 2. array
    // nếu ta chỉ truyền vào 1 tham số là function thì nó sẽ chạy MỖI KHI COMPONENT RERENDER (component sễ rerender khi state của nó có thay đổi)
    // nếu ta truyền vào đối số thứ 2 thì use effect CHỈ CHẠY 1 LẦN khi component được mount 
    useEffect(() => {
        if (search === '') {
            document.title = "React App";
        } else {
            document.title = `p=${search}`;
        }

    });
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    const searchToGoogle = () => {
        window.open(`https://www.google.com/search?q=${search}`, '_blank');
    }
    return (
        <Navbar variant='dark' className="header" >
            <Container>
                <Navbar.Brand href="/">React-1  <FaReact /></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/holiday">Important Day</Nav.Link>
                    <Nav.Link href="/news">News</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={searchHandler}
                    />
                    <Button variant="dark" onClick={searchToGoogle}><GoSearch /></Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default Layout