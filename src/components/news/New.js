import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import LoadingSpinner from "../spinnerLoad";
import FistHeadline from './FistHeadline';
import NewElement from './NewElement';
import './New.css';


const New = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://inshorts.deta.dev/news?category=all').then(res => res.json()).then(data => { setNews(data.data) });

    }, []);
    if (news.length === 0) {
        return (
            <Row className='justify-content-md-center'>
                <Col sm={6} className="loadTile">
                    <h5>
                        Web is Loading... <LoadingSpinner />
                    </h5>
                </Col>
            </Row>
        )
    } else {
        return (
            <Container>
                <Row>
                    <FistHeadline hl={news.shift()} key="headLIne" />
                </Row>
                <Row>
                    {news.map(rnew => <Col xm={6}><NewElement rnew={rnew} key={rnew.id} /> </Col>)}
                </Row>
            </Container>

        )
    }
}




export default New