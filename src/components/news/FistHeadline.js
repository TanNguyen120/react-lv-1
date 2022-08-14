import React from 'react'
import { Col, Row, Badge } from 'react-bootstrap'
import "./New.css";

const FistHeadline = ({ hl }) => {
    return (
        <Row className='headLineNews'>
            <Col sm={7}>
                <h4>{hl.title}</h4>
                <p>{hl.content}</p>
                <Badge bg="secondary">{hl.date} - {hl.time}</Badge> By {hl.author}
            </Col>
            <Col sm={5}>
                <img src={hl.imageUrl} alt='newsImg' width={"400"} height={"400"} />
            </Col>
        </Row>
    )

}

export default FistHeadline;