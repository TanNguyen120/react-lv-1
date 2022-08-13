import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import "./New.css";

const NewElement = ({ rnew }) => {
    return (
        <Row className='newSection'>
            <Col sm={3}>
                <h4>{rnew.title}</h4>
                <p>{rnew.content}</p>
                <Badge bg="secondary">{rnew.date} - {rnew.time}</Badge> By {rnew.author}
            </Col>
            <Col sm={3}>
                <img src={rnew.imageUrl} alt='newsImg' width={'400'} height={'400'} />
            </Col>
        </Row>
    )
}

export default NewElement

