import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'


const data = [
    {
        id: 1,
        service_description: 'all about the Services...',
    },
    {
        id: 2,
        service_description: 'all about the Services...',
    },
    {
        id: 3,
        service_description: 'all about the Services...',
    },
]

const Services = () => {

    return (
        <section id='Services'>
            <h5>What I Offer</h5>
            <h2>Sevices</h2>
            <div className="container container__services">
                <article className='service'>

                    <div className="service__head">
                        <h3>Something</h3>
                    </div>

                    <ul className='service__list' >

                        {
                            data.map(({service_description}) => {
                                <li>
                                    <BiCheck className='service__list-icon' />
                                    <p>{service_description}</p>
                                </li>
                            })
                        } 
                    </ul>

                </article>

                <article className='service'>

                    <div className="service__head">
                        <h3>Something</h3>
                    </div>

                    <ul className='service__list' >
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                    </ul>

                </article>

                <article className='service'>

                    <div className="service__head">
                        <h3>Something</h3>
                    </div>

                    <ul className='service__list' >
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                        <li>
                            <BiCheck className='service__list-icon' />
                            <p>all about the service....</p>
                        </li>
                    </ul>

                </article>
            </div>
        </section>
    )
}

export default Services