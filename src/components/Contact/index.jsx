import React from "react";
import {
  ContactContainer, ContactH1, ContactWrapper,
  ContactForm, ContactInput, ContactButton, ContactTextArea
} from "./ContactElements";
import emailjs from 'emailjs-com'

function Contact() {

  /* EmailJS Docs */
  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('GmailMessage', 'template_3t7zgwm', e.target, '_f_oZ2Ze9sGFru6JW')
      .then(() => {
        alert(' Message sent successfully! ');
      }, (error) => {
        console.log(error.message);
      });
    e.target.reset();

  };


  return (
    <>
      <ContactContainer id="contact">
        <ContactH1>Contact Me</ContactH1>
        <ContactWrapper>
          <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <ContactInput
              type="text"
              required placeholder="Name..."
              name="name"
            />
            <label htmlFor="email">E-mail:</label>
            <ContactInput
              type="email"
              required placeholder="Your E-mail..."
              name="email"
            />
            <label htmlFor="message">Message:</label>
            <ContactTextArea
              name="message"
              required placeholder="Your Message..."
            />
            <ContactButton type="submit">Send Message</ContactButton>
          </ContactForm>
        </ContactWrapper>
      </ContactContainer>
    
    </>
  )
}

export default Contact;

