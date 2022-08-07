import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdOutlineDateRange } from 'react-icons/md';
import { CgToday } from 'react-icons/cg';
import './Clock.css'

const Clock = () => {
    const [time, setTime] = React.useState();
    const [date, setDate] = React.useState();
    const [day, setDay] = React.useState();
    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toLocaleDateString());
            setDay(new Date().toLocaleDateString('en-US', { weekday: 'long' }));
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [time]);
    return (
        <Row >
            <Col className='clock' sm={8}>{time}</Col>
            <Col sm={4}>
                <Row className='date'>
                    <Col><h4> Dương Lịch </h4> {date} <MdOutlineDateRange /></Col>
                </Row>
                <Row className='date'>
                    <Col>{day} <CgToday /></Col>
                </Row>

            </Col>
        </Row>
    )
}

export default Clock