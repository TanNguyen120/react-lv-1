import React from 'react'
import { Col, Row, Badge } from 'react-bootstrap'
import "./New.css";

const FistHeadline = ({ hl }) => {
    return (
        <Row className='newSection'>
            <Col sm={4}>
                <h4>{hl.title}</h4>
                <p>{hl.content}</p>
                <Badge bg="secondary">{hl.date} - {hl.time}</Badge> By {hl.author}
            </Col>
            <Col sm={4}>
                <img src={hl.imageUrl} alt='newsImg' />
            </Col>
        </Row>
    )

}

export default FistHeadline;