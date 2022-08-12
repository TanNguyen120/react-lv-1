import React from 'react';
import { useState, useEffect } from 'react';
import './New.css';

const New = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://inshorts.deta.dev/news?category=science').then(res => res.json()).then(data => setNews(data.data));
    }, []);
    return (
        <div>{JSON.stringify(news)}</div>
    )
}

export default New