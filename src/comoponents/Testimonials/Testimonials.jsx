import React from 'react'
import './Testimonials.css'
import CLIENT from '../../assets/CLIENT.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        id: 1,
        image: CLIENT,
        name: 'someone',
        review: 'the review'
    },
    {
        id: 1,
        image: CLIENT,
        name: 'someone',
        review: 'the review'
    },
    {
        id: 1,
        image: CLIENT,
        name: 'someone',
        review: 'the review'
    },
]
const Testimonials = () => {
    return (
        <section id='Testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }} >
                {
                    data.map(({ id, image, name, review }) => {
                        return (
                            <SwiperSlide key={id} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={image} alt='client-image' />
                                </div>

                                <h5>{name}</h5>
                                <small>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    )
}

export default Testimonials