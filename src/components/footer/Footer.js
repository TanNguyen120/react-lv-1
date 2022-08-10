import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiOutlineYoutube, AiOutlinePhone, AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import './footer.css';

const Footer = () => {
    return (
        <Row className="footer">
            <Col className='footerCol'>
                <h3>Harmon</h3>
                <img src={"/aot-logo.jpg"} alt={'logo'} width="150" height="150" />
                <img src={"/lawLogo.png"} alt={'logo'} width="150" height="150" />
                <img src={"/swordLogo.png"} alt={'logo'} width="150" height="150" />
            </Col>
            <Col className='footerCol'>
                <h3>Contact</h3>
                <div> <AiOutlineYoutube /> youtube.com/taan</div>
                <div> <AiOutlinePhone /> 098-xxx-xxx</div>
                <div> <AiOutlineMail /> tanguyen1220@gmail.com</div>
                <div> <AiFillGithub /> github.com/tanguyen120</div>
                {/* <Link to="/borring-stuff">Stuff to do</Link> */}
            </Col>
            <Col className='footerCol'>
                <h3>About</h3>
                <div>This is a website for EDUCATION PURPOSE</div>
                <div>DISCLAIMER: Any things show in this website is purely for education purpose and not use for any order purpose</div>
            </Col>
        </Row>
    )
}

export default Footer