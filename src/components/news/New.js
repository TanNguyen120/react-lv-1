import React from 'react';
import { useState, useEffect } from 'react';
import { Row, Col, Container, ListGroup } from 'react-bootstrap';
import { FaRegNewspaper } from 'react-icons/fa';

import LoadingSpinner from "../spinnerLoad";
import FistHeadline from './FistHeadline';
import NewElement from './NewElement';
import './New.css';


const New = () => {
    const [news, setNews] = useState([]);
    // current selected category
    const [selectedCategory, setSelectedCategory] = useState('all');
    const category = [
        'national',
        'business',
        'sports',
        'world',
        'politics',
        'technology',
        'startup',
        'entertainment',
        'miscellaneous',
        'hatke',
        'science',
        'automobile'];


    useEffect(() => {
        fetch(`https://inshorts.deta.dev/news?category=${selectedCategory}`).then(res => res.json()).then(data => { setNews(data.data) });

    }, [selectedCategory]);

    // function to change the selected category
    const handleCategoryChange = (e) => {
        // we also need to clear the news array
        setNews([]);
        setSelectedCategory(e.target.textContent);
    }

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
                <Row className='newSection'>
                    <Col sm={9} className='headLine'>
                        <h3>{selectedCategory} News <FaRegNewspaper /> </h3>
                        <FistHeadline hl={news.shift()} key="headLIne" />
                    </Col>
                    <Col sm={3}>
                        <h3>Category</h3>
                        <ListGroup>
                            {category.map((cat, index) => {
                                return (
                                    <ListGroup.Item key={index} className="catListItem" onClick={e => handleCategoryChange(e)}>{cat}</ListGroup.Item>
                                )
                            })}
                        </ListGroup>

                    </Col>
                </Row>
                <Row>
                    <Col sm={9}>
                        {news.map(rnew => <NewElement rnew={rnew} key={rnew.id} />)}

                    </Col>
                </Row>
            </Container>
        )
    }
}




export default New