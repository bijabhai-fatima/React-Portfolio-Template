import React from 'react'
import './Contact.css'
import { MdAttachEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vkyxlxe', 'template_rlc3xpb', form.current, '0A3Dtlu8DRNaCmHvB')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='Contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">

                     
                    <article className="contact__option">
                        <MdAttachEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>youremial@gmail.com</h5>
                        <a href='mailto:youremial@gmail.com' target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>username</h5>
                        <a href='https://m.me/username' target='_blank'>Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <h5>+91 xxxxx xxxxxx</h5>
                        <a href='https://api.whatsapp.com/send?phone=xxxxxx' target='_blank'>Send a message</a>
                    </article>

                </div>
                <form name='' ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' placeholder='Your Message' required ></textarea>
                    <button type='submit' rows='7' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact