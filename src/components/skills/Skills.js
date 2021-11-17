import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div className="main-skills">
      <div className="container">
        <h1 className="text-center head-skills pt-5">Skills</h1>
        <div className="skill-card mt-5 pb-5">
          <div className="row">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">HTML</h6>
                <div className="prc text-center">
                  <div className="prc1 text-center" data-aos="fade-right"></div>
                </div>
                <p className="text-center">95%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">CSS</h6>
                <div className="prc text-center">
                  <div className="prc2 text-center" data-aos="fade-right" data-aos-delay="100"></div>
                </div>
                <p className="text-center">90%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">Bootstrap</h6>
                <div className="prc text-center">
                  <div className="prc3 text-center" data-aos="fade-right" data-aos-delay="200"></div>
                </div>
                <p className="text-center">95%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">Sass</h6>
                <div className="prc text-center">
                  <div className="prc4 text-center" data-aos="fade-right" data-aos-delay="300"></div>
                </div>
                <p className="text-center">70%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">JavaScript</h6>
                <div className="prc text-center">
                  <div className="prc5 text-center" data-aos="fade-right" data-aos-delay="400"></div>
                </div>
                <p className="text-center">80%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">ES6</h6>
                <div className="prc text-center">
                  <div className="prc6 text-center" data-aos="fade-right" data-aos-delay="500"></div>
                </div>
                <p className="text-center">80%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">Jquery</h6>
                <div className="prc text-center">
                  <div className="prc7 text-center" data-aos="fade-right" data-aos-delay="600"></div>
                </div>
                <p className="text-center">85%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">Angular</h6>
                <div className="prc text-center">
                  <div className="prc8 text-center" data-aos="fade-right" data-aos-delay="700"></div>
                </div>
                <p className="text-center">80%</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="skill">
                <h6 className="text-center pt-3">React</h6>
                <div className="prc text-center">
                  <div className="prc9 text-center" data-aos="fade-right" data-aos-delay="800"></div>
                </div>
                <p className="text-center">80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
