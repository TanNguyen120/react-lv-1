import React from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { MdDateRange } from 'react-icons/md';
import { RiFileTextLine, RiEnglishInput, RiEmotionSadLine } from 'react-icons/ri';
import { BiHappyHeartEyes } from 'react-icons/bi';

import './Holiday.css';
const Holiday = () => {
    const [year] = useState(new Date().getFullYear());
    const [country, setCountry] = useState('VN');
    const [holiday, setHoliday] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [isHoliday, setIsHoliday] = useState(false);
    const [realCountryName, setRealCountryName] = useState('Việt Nam');
    useEffect(() => {


        //  get holiday from API and set to state
        fetch(`https://date.nager.at/api/v3/publicholidays/${year}/${country}`).then(res => res.json()).then(data => {
            setHoliday(data);
        }).catch(err => {
            console.log(err);
        });

        // check if today is holiday or not
        fetch(`https://date.nager.at/api/v3/IsTodayPublicHoliday/${country}`).then(res => {
            res.status === 200 ? setIsHoliday(true) : setIsHoliday(false);
        })
    }, [year, country]);
    useEffect(() => {
        // get country list
        fetch(`https://date.nager.at/api/v3/AvailableCountries`).then(res => res.json()).then(data => setCountryList(data));
    }, []);

    // handle change year and country
    const handleChangeCountry = (e) => {
        setCountry(e.target.value);
        setRealCountryName(e.target.options[e.target.selectedIndex].text);
    }
    return (
        <Container className='homeContainer'>
            <Row>
                <h4>Let It Be Holy And Jolly</h4>
                <img src='https://media.giphy.com/media/5ocAtoAPhIDcI/giphy.gif' alt='gif' width="170" height="400" />
            </Row>
            <Row className='holidayRow'>
                <Col sm={2}>
                    <h5>{year} HOLIDAYS IN </h5>
                </Col>
                <Col sm={3}>
                    <Form.Select aria-label="Default select example" onChange={e => handleChangeCountry(e)} className="formSelect">
                        <option>Việt Nam</option>
                        {countryList.map((country, index) => {
                            return (
                                <option key={index} value={country.countryCode}>{country.name}</option>
                            )
                        })}

                    </Form.Select>
                </Col>

            </Row>
            <Row >
                {holiday.map(item => <HolidayList key={item.date} item={item} />)}
            </Row>
            <Row className='holidayRow'>
                <HolidayContext isHoliday={isHoliday} country={realCountryName} />
            </Row>
        </Container>

    )
}

const HolidayList = ({ item }) => {
    return (
        <Col className="holidayCard" sm={2}>
            <Row>
                <Col><MdDateRange /> : {item.date} <img src='https://media.giphy.com/media/peAFQfg7Ol6IE/giphy.gif' alt="fireworkGif" height='50' width='50' /></Col>
            </Row>
            <Row>
                <Col><RiFileTextLine /> : {item.localName}</Col>
            </Row>
            <Row>
                <Col><RiEnglishInput /> : {item.name}</Col>
            </Row>
        </Col>
    )
}

const HolidayContext = ({ isHoliday, country }) => {
    if (isHoliday) {
        return <div className='holidayContex'>
            <>
                <h1>HOORAY <BiHappyHeartEyes /> Today is holiday in {country}</h1>
                <img src='https://media.giphy.com/media/QMkPpxPDYY0fu/giphy.gif' alt="GasbyGif" height='150' width='50' />
            </>
        </div>
    } else {
        return <div className='holidayContex'>
            <>
                <h1>AWW MAN <RiEmotionSadLine />  Today is not holiday in {country}</h1>
                <img src='https://media.giphy.com/media/CM1rHbKDMH2BW/giphy.gif' alt="GasbyGif" height='350' width='500' />
            </>
        </div>
    }
}

export default Holiday