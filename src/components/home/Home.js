import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion, Badge, Carousel } from 'react-bootstrap';
import { FaCat, FaDog } from 'react-icons/fa';
import './home.css';
const Home = () => {
    const [catFacts, setCatFact] = useState([]);
    const [coffeeImage, setCoffeeImage] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5').then(res => res.json()).then(data => setCatFact(data));
        for (let i = 0; i < 3; i++) {
            fetch('https://dog.ceo/api/breeds/image/random').then(res => res.json()).then(data => setCoffeeImage(coffeeImage => [...coffeeImage, data]));
        }
        setLoading(false);
        console.log(JSON.stringify(coffeeImage));
    }, []);
    return (
        <Container className='homeContainer'>
            <Row className='row1Home'>
                <Col sm={4} className='componentTile'> <h3> Some Cat Facts <FaCat /></h3>
                    <Accordion defaultActiveKey="0" className='accordion'>
                        {catFacts.map((catFact, index) => {
                            return (
                                <Accordion.Item eventKey={index} className='accordionItem' key={catFact._id}>
                                    <Accordion.Header className='accordionHeader' style={{ backgroundColor: 'tomato' }}><FaCat /> <span>    </span> fact number {index + 1}</Accordion.Header>
                                    <Accordion.Body>
                                        <p>{catFact.text} <Badge bg="secondary">
                                            date {catFact.createdAt}</Badge></p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })}
                    </Accordion>
                </Col>
                <Col sm={8} className='ComponentTile'>
                    <h3 >Dog Img For Your Souls <FaDog /></h3>
                    <Carousel className='carousel'>
                        {coffeeImage.map((coffeeImg, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img
                                        className="d-block w-100"
                                        id='carouselImg'
                                        src={coffeeImg.message}
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Home