import React, { useState, useEffect } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from "../config.js"
import axios from 'axios';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({media_type, id}) => {
    const [credits, setCredits] = useState([])

    const items = credits.map((c) => (
        <div className='flex flex-col object-contain p-2'>
            <img
             src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
             alt={c?.name}
             onDragStart={handleDragStart}
             className='rounded-lg mb-2 shadow-md'
            />
            <b className='text-sm'>{c?.name}</b>
            {/* <b className='text-sm text-gray-400'>{c?.character}</b> */}
        </div>
    ))

    const responsive = {
        0: {
          items: 4,
        },
        512: {
          items: 6,
        },
        1024: {
          items: 7,
        },
    };

    const fetchCredits = async() => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`)

        setCredits(data.cast)
    }

    useEffect(() => {
        fetchCredits()
        // eslint-disable-next-line
    }, [])

    return (
        <AliceCarousel
            mouseTracking
            infinite
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />
    )
}

export default Carousel