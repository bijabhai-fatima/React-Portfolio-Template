import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const links = {
    linkedin: '',
    github: '',
}

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href={links.linkedin} target='_blank'><BsLinkedin /></a>
            <a href={links.github}target='_blank'><FaGithub /></a>
        </div>
    )
}

export default HeaderSocials