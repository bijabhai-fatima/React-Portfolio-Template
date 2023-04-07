import React from 'react'
import './Portfolio.css'
import PORT from '../../assets/PORTFOLIO_ITEM.jpg'

const data = [
    {
        id: 1,
        image: PORT,
        title: 'My title 1',
        github: 'https://github.com',
        demo: '#'
    },
    {
        id: 2,
        image: PORT,
        title: 'My title 2',
        github: 'https://github.com',
        demo: '#'
    },
    {
        id: 3,
        image: PORT,
        title: 'My title 3',
        github: 'https://github.com',
        demo: '#'
    }
]

const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article className='portfolio__item'>
                                <div key={id} className="portfolio__item-image">
                                    <img src={image} alt='portfolio-image' />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_balnk'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio