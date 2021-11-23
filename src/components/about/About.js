import React from "react";
import "./About.css";
import cv from "../../Mohamed-Abdelfattah.pdf";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
// import { ImYahoo2 } from "react-icons/im";
import Skills from "../skills/Skills";
const About = () => {
  return (
    <>
      <div className="main-about">
        <div className="container">
          <h1 className="text-center head-about pt-5">About Me</h1>
          <h3 className="about-h3 mt-3">I am Mohamed Abd Elfattah</h3>

          <div className="row mt-2 pb-5">
            <div className="col-12 col-lg-6">
              <div className="about-info" data-aos="fade-right">
                <p className="about-p">
                  A Front-End developer seeking to learn new web technologies, I
                  always strive to be different, I have learned several JS
                  frameworks to enhance my skills, my goal is to be a great
                  developer with a knowledge that adding new things to my
                  community, so I always learning and researching.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
            {/* <h3 className="about-h3">Click Name</h3> */}

              <div className="about-social" data-aos="fade-left">
                <div>
                  <FaFacebookSquare className="face" />
                  <span>
                    <a href="https://www.facebook.com/mohamed.hamo.37604">
                      Mohammed Abdelfattah
                    </a>
                  </span>
                </div>
                <div>
                  <FaWhatsappSquare className="whats" />
                  <span>01012762282</span>
                </div>
                {/* <div>
                  <FaTwitterSquare className="twitter" />
                  <span>@Mohamed73148764</span>
                </div> */}
                <div>
                  <BsLinkedin className="linkedin" />
                  <span>
                    <a href="https://www.linkedin.com/in/mohamed-abdelfattah10/">
                      Mohamed Abdelfattah
                    </a>
                  </span>
                </div>
                <div>
                  <SiGmail className="gmail" />
                  <span>
                    <a href="https://mail.google.com/mail/u/3/#inbox">
                      Mohamed Abdelfattah
                    </a>
                  </span>
                </div>
                <div>
                  <FaGithubSquare className="git" />
                  <span>
                    <a href="https://github.com/Mohamed-Abdelfattah14">
                      Mohamed Abdelfattah
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pb-5 cv" data-aos="fade-up">
            <a className="btn" href={cv} download="Mohamed-Abdelfattah.pdf">
              Download CV
            </a>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
};

export default About;
