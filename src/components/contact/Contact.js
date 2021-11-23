import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const initialValues = { name: "", subject: "", email: "", message: "" };
  const [formValue, setFormValue] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const formRef = useRef();

  const handlSubmit = (e) => {
    e.preventDefault();
    setFormError(validate(formValue));
    if (!formError) {
      setIsValid(false);
      setIsSubmit(true);
    }

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

  const notify = () => {
    toast.info("Email send , Thanks", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
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
      <div id="contact" className="main-contact">
        <div className="container">
          <h1 className="text-center head-contact pt-5">Contact Me</h1>
          <h6 className="text-center pb-3 pt-1">
            Send your message , I will contact with you
          </h6>
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
              <button
                className="btn mt-4 mb-4"
                disabled={isValid}
                onClick={notify}
              >
                <FiSend className="icon-send" /> send
              </button>
              <ToastContainer />
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
