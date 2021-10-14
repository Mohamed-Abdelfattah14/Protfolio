import React , { useRef } from "react";
import "./Contact.css";
import emailjs from 'emailjs-com';
import { FiSend } from 'react-icons/fi'

const Contact = () => {
    const formRef = useRef();

    const handlSubmit = (e) =>{
        e.preventDefault()

        emailjs.sendForm('service_vzzlvai', 'template_7r481gg', formRef.current, 'user_C6bPP3WWhMvXJIwRvdlet')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <>
      <div className="main-contact">
        <div className="container">
          <h1 className="text-center head-contact pt-5">Contact Me</h1>
          <div className="contact-card">
              <form ref={formRef} onSubmit={handlSubmit}>
                  <input className="form-control" placeholder="Name" type="text" name="name" />
                  <input className="form-control" placeholder="Subject" type="text" name="subject" />
                  <input className="form-control" placeholder="Email" type="text" name="email" />
                  <textarea className="form-control" rows="6" placeholder="Message" name="message" />
                  <button className="btn mt-4 mb-4"><FiSend className="icon-send" /> send</button>
              </form>
          </div>
        </div>
        <footer className="footer">
              <p>copyright © 2021 all rights reserved</p>
          </footer>
      </div>
    </>
  );
};

export default Contact;
