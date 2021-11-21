import React, { useState } from "react";
import "./Experience.css";
import { FaUniversity } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { CgCalendarDates } from "react-icons/cg";
import { MdWork } from "react-icons/md";
const Experience = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <>
      <div className="main-ex">
        <div className="container">
          <h1 className="text-center head-ex pt-5">Experince</h1>
          <div className="row mt-5 pb-5">
            <div className="col-12">
              <div className="ex-tabs">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className={toggle === 1 ? "nav-link active" : "nav-link"}
                      onClick={() => toggleTab(1)}
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Education
                    </button>
                    <button
                      className={toggle === 2 ? "nav-link active" : "nav-link"}
                      onClick={() => toggleTab(2)}
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Work
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className={
                      toggle === 1
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      <div className="col-12" data-aos="fade-up">
                        <div className="card">
                          <span>
                            <FaUniversity className="icon" />
                          </span>
                          <span className="ed-h5 mb-3">
                            Information Technology Inistitute (ITI)
                          </span>
                          <span className="icon">
                            <CgCalendarDates />
                          </span>
                          <span className="ed-h6 mb-3">
                            April 2021 - July 2021
                          </span>
                          <GoLocation className="icon" />
                          <span className="ed-h6 mb-3">Menoufia, Egypt</span>
                          <span className="ed-h6 mb-3">
                            3 Month intensive training program , Web Development
                            using MEARN Stack
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="line">
                      <div className="star"></div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="card" data-aos="fade-up">
                          <span>
                            <FaUniversity className="icon" />
                          </span>
                          <span className="ed-h5 mb-3">
                            faculty of Computer Science and Information System
                          </span>
                          <span className="icon">
                            <CgCalendarDates />
                          </span>
                          <span className="ed-h6 mb-3">
                            September 2015 - May 2019
                          </span>
                          <GoLocation className="icon" />
                          <span className="ed-h6 mb-3">
                            6 October University , Egypt
                          </span>
                          <span className="ed-h6 mb-3">
                            I have graduated from the faculty of Computer Science
                            and Information System in 2019 with grade Good
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      toggle === 2
                        ? "tab-pane fade show active"
                        : "tab-pane fade"
                    }
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                        <span>
                            <MdWork className="icon" />
                          </span>
                          <span className="ed-h5 mb-3">
                            Technical Support
                          </span>
                          <span className="icon">
                            <CgCalendarDates />
                          </span>
                          <span className="ed-h6 mb-3">
                            September 2020 - October 2020
                          </span>
                          <GoLocation className="icon" />
                          <span className="ed-h6 mb-3">
                            Etisal International
                          </span>
                          
                        </div>
                      </div>
                    </div>
                    <div className="line">
                      <div className="star"></div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="card">
                        <span>
                            <MdWork className="icon" />
                          </span>
                          <span className="ed-h5 mb-3">
                            Front End Developer
                          </span>
                          <span className="icon">
                            <CgCalendarDates />
                          </span>
                          <span className="ed-h6 mb-3">
                            August 2020 - September 2020
                          </span>
                          <GoLocation className="icon" />
                          <span className="ed-h6 mb-3">
                            Pixel , Giza , Egypt
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
