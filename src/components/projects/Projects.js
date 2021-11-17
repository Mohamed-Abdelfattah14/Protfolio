import React, { useState } from "react";
import "./Projects.css";

const pros = [
  {
    name: "food court",
    tech: "react",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/food.jpg?raw=true",
    href: "https://617f089b502bee60470f8e66--mohamed-abdelfattah14.netlify.app/",
  },
  {
    name: "Movie app",
    tech: "react",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/movie.jpg?raw=true",
    href: "https://6175b984d1fb6b0e80613bc4--mohamed-abdelfattah14.netlify.app/",
  },
  {
    name: "Protfolio",
    tech: "react",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/head.jpg?raw=true",
    href: "",
  },
  {
    name: "Courses",
    tech: "angular",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/courses.png?raw=true",
    href: " https://6175b3eb40ba1179b1ff8ec0--mohamed-abdelfattah14.netlify.app/",
  },
  {
    name: "Crud",
    tech: "angular",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/crud.png?raw=true",
    href: "https://6191479a35b527b953a6d4d5--mohamed-abdelfattah14.netlify.app/",
  },
  {
    name: "Weather app",
    tech: "angular",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/weather.jpg?raw=true",
    href: "https://617f1a7a0e5bd2a57acb64ab--mohamed-abdelfattah14.netlify.app/",
  },
  {
    name: "Hand watch",
    tech: "UI",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/watch.jpg?raw=true",
    href: "https://mohamed-abdelfattah14.github.io/Wristwatches-Bootstrap/",
  },
  {
    name: "Gym",
    tech: "UI",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/gym.jpg?raw=true",
    href: "https://mohamed-abdelfattah14.github.io/gym/",
  },
  {
    name: "Study",
    tech: "UI",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/study.png?raw=true",
    href: "https://mohamed-abdelfattah14.github.io/Study-bootstarp/",
  },
  {
    name: "Company",
    tech: "js",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/company.jpg?raw=true",
    href: "https://mohamed-abdelfattah14.github.io/company-Js/",
  },
  {
    name: "Team",
    tech: "js",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/team.jpg?raw=true",
    href: "https://mohamed-abdelfattah14.github.io/Team-js/",
  },
];

const ang = pros.filter((pro) => pro.tech === "angular");
const rct = pros.filter((pro) => pro.tech === "react");
const js = pros.filter((pro) => pro.tech === "js");
const ui = pros.filter((pro) => pro.tech === "UI");

const Projects = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTabs = (index) => {
    setToggle(index);
  };
  return (
    <>
      <div className="main-projects pb-5">
        <h1 className="text-center head-projects pt-5">Projects</h1>
        <div className="container">
          <nav>
            <div className="nav nav-tabs mt-5" id="nav-tab" role="tablist">
              <button
                className={toggle === 1 ? "nav-link active" : "nav-link"}
                onClick={() => toggleTabs(1)}
                data-aos="fade-down"
                data-aos-delay="100"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                All
              </button>
              <button
                className={toggle === 2 ? "nav-link active" : "nav-link"}
                onClick={() => toggleTabs(2)}
                data-aos="fade-down"
                data-aos-delay="200"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Angular
              </button>
              <button
                className={toggle === 3 ? "nav-link active" : "nav-link"}
                onClick={() => toggleTabs(3)}
                data-aos="fade-down"
                data-aos-delay="300"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                React
              </button>
              <button
                className={toggle === 4 ? "nav-link active" : "nav-link"}
                onClick={() => toggleTabs(4)}
                data-aos="fade-down"
                data-aos-delay="400"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                JavaScript
              </button>{" "}
              <button
                className={toggle === 5 ? "nav-link active" : "nav-link"}
                onClick={() => toggleTabs(5)}
                data-aos="fade-down"
                data-aos-delay="500"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                UI
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className={
                toggle === 1 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {pros.map((e) => {
                  return (
                    <div
                      key={e.name}
                      className="col-12 col-md-6 col-lg-4 img-contant"
                    >
                      <div className="view">
                        <h3 className="text-center mt-5">{e.name}</h3>
                        
                        <h6 className="text-center mt-3">{e.tech}</h6>
                        
                        <div className="text-center mt-3">
                          <a className="btn" href={e.href}>
                            View
                          </a>
                        </div>
                      </div>
                      <img className="imge" src={e.img} alt={e.name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={
                toggle === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="row">
                {ang.map((e) => {
                  return (
                    <div
                      key={e.name}
                      className="col-12 col-md-6 col-lg-4 img-contant"
                    >
                      <div className="view">
                        <a className="btn" href={e.href}>
                          View
                        </a>
                      </div>
                      <img className="imge" src={e.img} alt={e.name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={
                toggle === 3 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row">
                {rct.map((e) => {
                  return (
                    <div
                      key={e.name}
                      className="col-12 col-md-6 col-lg-4 img-contant"
                    >
                      <div className="view">
                        <a className="btn" href={e.href}>
                          View
                        </a>
                      </div>
                      <img className="imge" src={e.img} alt={e.name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={
                toggle === 4 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row">
                {js.map((e) => {
                  return (
                    <div
                      key={e.name}
                      className="col-12 col-md-6 col-lg-4 img-contant"
                    >
                      <div className="view">
                        <a className="btn" href={e.href}>
                          View
                        </a>
                      </div>
                      <img className="imge" src={e.img} alt={e.name} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={
                toggle === 5 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="row">
                {ui.map((e) => {
                  return (
                    <div
                      key={e.name}
                      className="col-12 col-md-6 col-lg-4 img-contant"
                    >
                      <div className="view">
                        <a className="btn" href={e.href}>
                          View
                        </a>
                      </div>
                      <img className="imge" src={e.img} alt={e.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// function single(pros) {
//   return pros.array.forEach((element) => {
//     return `<div>${element.name}</div>`;
//   });
// }
export default Projects;
