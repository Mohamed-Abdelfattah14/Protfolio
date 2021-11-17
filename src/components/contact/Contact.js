import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const initialValues = { name: "", subject: "", email: "", message: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const formRef = useRef();

  const handlSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    setIsSubmit(true);

    emailjs
      .sendForm(
        "service_vzzlvai",
        "template_7r481gg",
        formRef.current,
        "user_C6bPP3WWhMvXJIwRvdlet"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    // console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      // console.log(formValue);
    }
  }, [formError, isSubmit]);

  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.subject) {
      errors.subject = "Subject is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email is not a valid email format!";
    }
    if (!values.message) {
      errors.textarea = "Textarea is required";
    }
    return errors;
  };
  return (
    <>
      <div className="main-contact">
        <div className="container">
          <h1 className="text-center head-contact pt-5">Contact Me</h1>
          <div className="contact-card">
            <form ref={formRef} onSubmit={handlSubmit}>
              <div className="row">
                <div className="col-md-6" data-aos="fade-right">
                  <input
                    className="form-control"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={formValue.name}
                    onChange={handlChange}
                  />
                  <p>{formError.name}</p>

                  <input
                    className="form-control"
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={formValue.subject}
                    onChange={handlChange}
                  />
                  <p>{formError.subject}</p>
                  <input
                    className="form-control"
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={formValue.email}
                    onChange={handlChange}
                  />
                  <p>{formError.email}</p>
                </div>

                <div className="col-md-6" data-aos="fade-left">
                  <textarea
                    className="form-control"
                    rows="6"
                    placeholder="Message"
                    name="message"
                    value={formValue.message}
                    onChange={handlChange}
                  />
                  <p>{formError.textarea}</p>
                  
                </div>
              </div>
              <button className="btn mt-4 mb-4">
                    <FiSend className="icon-send" /> send
                  </button>
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
