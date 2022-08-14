import React from 'react';
import { Col, Row, Badge } from 'react-bootstrap';
import "./New.css";

const NewElement = ({ rnew }) => {

    const toOriginalLink = () => {
        alert("Original Link");
        window.open(rnew.url, "_blank");
    }
    return (
        <Row className='newElement' onClick={() => toOriginalLink()}>
            <Col sm={7}>
                <h6>{rnew.title}</h6>
                <p>{rnew.content}</p>
                <Badge bg="secondary">{rnew.date} - {rnew.time}</Badge> By {rnew.author}
            </Col>
            <Col sm={5}>
                <img src={rnew.imageUrl} alt='newsImg' width={'390'} height={'250'} />
            </Col>
        </Row>
    )
}

export default NewElement

