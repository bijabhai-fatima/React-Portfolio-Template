import React from 'react'
import CTA from './CTA'
import ME from '../../assets/ME.jpg'
import './Header.css'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <section className="container header__container">
                <h5>Hello I'm</h5>
                <h1>your name</h1>
                <h5 className='text-light'>designation</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt='me' />
                </div>

                <a href='#Contact' className='scroll__down'>Scroll down</a>
            </section>
        </header>
    )
}

export default Header