import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdOutlineDateRange } from 'react-icons/md';
import { CgToday } from 'react-icons/cg';
import { CalendarVietnamese } from 'date-chinese';
import { GiEgyptianBird, GiEgyptianProfile, GiEgyptianPyramids, GiEgyptianWalk, GiEgyptianTemple, GiEgyptianSphinx } from 'react-icons/gi';

import './Clock.css'

const Clock = () => {
    const [time, setTime] = React.useState();
    const [date, setDate] = React.useState();
    const [day, setDay] = React.useState();
    const [lunarDate, setLunarDate] = React.useState();
    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setDate(new Date().toLocaleDateString('en-GB'));
            setDay(new Date().toLocaleDateString('en-US', { weekday: 'long' }));

            // show lunar date for vietnamese
            let cal = new CalendarVietnamese();
            cal.fromDate(new Date());
            let cdate = cal.get();
            setLunarDate(`${cdate[4]} / ${cdate[2]} / ${cdate[1] + 1983}`);
            //> 1985

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
                    <Col>
                        <h4> Roman Calendar: </h4> {date} <MdOutlineDateRange />
                    </Col>
                </Row>
                <Row className='date'>
                    <Col>{day} <CgToday /></Col>
                </Row>
                <Row className='date'>
                    <Col>
                        <h4> Lunar Calendar: </h4> {lunarDate} <MdOutlineDateRange />
                    </Col>
                </Row>
                <Row className='date'>
                    <Col>
                        <h4>Egyptian Calendar:</h4> <GiEgyptianPyramids /> <GiEgyptianWalk /> <GiEgyptianTemple /> <GiEgyptianSphinx /> <GiEgyptianBird /> <GiEgyptianProfile />
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default Clock