import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} className='btn' download>Download CV</a>
            <a href="#Contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA