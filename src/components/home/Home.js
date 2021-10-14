import React from "react";
import "./Home.css";
import Typed from "react-typed";
import Particals from "react-particles-js";
import About from "../about/About";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import { GiHand } from "react-icons/gi";
const Home = () => {
  

  return (
    <>
    
      <Particals
        params={{
          Particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 500,
              },
            },
          },
        }}
      />

      <div className="main-head">
        <div className="over">
          <div className="container">
            <div className="head-info">
              <h1 className="head-h1" data-text="HI...Iam MOHAMED">
                <GiHand className="icon-hand" />
                ...I am MOHAMED
              </h1>
              <h2 className="text-center">
                <Typed
                  className="head-type"
                  strings={["Front End Developer", "UI Developer"]}
                  typeSpeed={50}
                  backSpeed={60}
                  loop
                />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />

    </>
  );
};

export default Home;
