import React from 'react'
import './About.css'
import ME from '../../assets/ME-About.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='About'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt='me' />
                    </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>your Experience</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon' />
                            <h5>Clients</h5>
                            <small>your Experience</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>your Experience</small>
                        </article>

                    </div>
                    <p>I am Computer Science and Engineering student. I consider
                        my self a responsible and orderly person. I am looking
                        forward for my first work experience.</p>
                    <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About