import React from 'react'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'
import './Contact.css'
const Contact = () => {
  return (
   <>
   <Navbar/>
    <main>
        <section class="contact-info">
            <h2>Get in Touch</h2>
            <p>We are here to assist you with all your real estate needs. Reach out to us via any of the methods below:</p>
            <ul>
                <li><strong>Address:</strong> 123 Real Estate Ave, Home City, HC 12345</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Email:</strong> contact@realestatebiz.com</li>
            </ul>
        </section>
        <section class="contact-form">
            <h2>Send Us a Message</h2>
            <form >
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone"/>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button className='cont-btn' type="submit">Send Message</button>
            </form>
        </section>
    </main>
    <Footer></Footer>
 </>
  )
}

export default Contact
