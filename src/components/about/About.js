import React from "react";
import "./About.css";
import cv from "../../cv.pdf";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { ImYahoo2 } from "react-icons/im";
import Skills from "../skills/Skills";
// const FileServer = require('file-server');
const About = () => {
  // const saveFile = () =>{
  //     FileServer.saveAs(
  //         process.env.REACT_APP_CLIENT_URL + "../../cv.pdf"
  //     )
  // }
  return (
    <>
      <div className="main-about">
        <div className="container">
          <h1 className="text-center head-about pt-5">About Us</h1>
          <div className="row mt-5 pb-5">
            <h3 className="about-h3">I am Mohamed Abd Elfattah</h3>
            <div className="col-12 col-lg-6">
              <div className="about-info">
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
              <div className="about-social">
                <div>
                  <FaFacebookSquare className="face" />
                  <span>hamom311@yahoo.com</span>
                </div>
                <div>
                  <FaWhatsappSquare className="whats" />
                  <span>01012762282</span>
                </div>
                <div>
                  <FaTwitterSquare className="twitter" />
                  <span>@Mohamed73148764</span>
                </div>
                <div>
                  <BsLinkedin className="linkedin" />
                  <span>Mohamed abdElfattah</span>
                </div>
                <div>
                  <ImYahoo2 className="yahoo" />
                  <span>mohamed.abdelfattah6897@gmail.com</span>
                </div>
                <div>
                  <FaGithubSquare className="git" />
                  <span>Mohamed-Abdelfattah14</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pb-5 cv">
            <a className="btn" href={cv} download="Muhammed Abdelfattah.pdf">
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
