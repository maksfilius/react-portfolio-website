import React from 'react'
import './Contact.css'
import Email from '../../images/email.png'
import WhatsApp from '../../images/whatsapp.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_sevix07', 'template_n36yoiw', form.current, 'JpRBw7acTxKtbhtTx')
		 
		e.target.reset()
		alert('Your message has been successfully sent')
	};

  	return (
		<div className="container" id='contact'>
			<h2>Contact</h2>
			<div className="contact_container">
				<div className="contact_items">
					<div className="contact_item">
						<div className="contact_email">
							<img src={Email} alt="" />
							<h3>Email</h3>
						</div>
						<p></p>
						<a href="mailto:" target="_blank">Send a message</a>
					</div>
					<div className="contact_item">
						<div className="contact_email">
							<img src={WhatsApp} alt="" />
							<h3>WhatsApp</h3>
						</div>
						<p></p>
						<a href="whatsapp://send?phone=">Send a message</a>
					</div>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name='name' placeholder='Your Name' required/>
					<input type="email" name='email' placeholder='Your Email'required/>
					<textarea name="message" id="" rows="8" placeholder='Your Message'></textarea>
					<button type='submit' className='send_btn'>Send Message</button>
				</form>
			</div>
			
		</div>
  	)
}

export default Contact