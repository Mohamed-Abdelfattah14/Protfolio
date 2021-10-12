import React, { useState } from "react";
import "./Projects.css";
// import imge from "../../imges/1.jpg";
// import igm2 from  "../../imges/2.jpg";

const pros = [
  {
    name: "food court",
    tech: "react",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/food.jpg?raw=true",
  },
  {
    name: "Movie app",
    tech: "react",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/movie.jpg?raw=true",
  },
  {
    name: "Protfolio",
    tech: "react",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/head.jpg?raw=true",
  },
  {
    name: "Courses",
    tech: "angular",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/courses.png?raw=true",
  },
  {
    name: "Crud",
    tech: "angular",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/crud.png?raw=true",
  },
  {
    name: "Weather app",
    tech: "angular",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/weather.jpg?raw=true",
  },
  {
    name: "Hand watch",
    tech: "UI",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/watch.jpg?raw=true",
  },
  {
    name: "Gym",
    tech: "UI",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/gym.jpg?raw=true",
  },
  {
    name: "Study",
    tech: "UI",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/study.png?raw=true",
  },
  {
    name: "Company",
    tech: "js",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/company.jpg?raw=true",
  },
  {
    name: "Team",
    tech: "js",
    img: "https://github.com/Mohamed-Abdelfattah14/Protfolio/blob/master/src/imges/team.jpg?raw=true",
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
                        <button className="btn">View</button>
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
                    <div key={e.name} className="col-12 col-md-6 col-lg-4 img-contant">
                       <div className="view">
                        <button className="btn">View</button>
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
                    <div key={e.name} className="col-12 col-md-6 col-lg-4 img-contant">
                       <div className="view">
                        <button className="btn">View</button>
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
                    <div key={e.name} className="col-12 col-md-6 col-lg-4 img-contant">
                       <div className="view">
                        <button className="btn">View</button>
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
                    <div key={e.name} className="col-12 col-md-6 col-lg-4 img-contant">
                       <div className="view">
                        <button className="btn">View</button>
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
