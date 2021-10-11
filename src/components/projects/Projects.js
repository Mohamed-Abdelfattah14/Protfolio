import React, { useState } from "react";
import "./Projects.css";
import imge from "../../imges/1.jpg";
// import igm2 from  "../../imges/2.jpg";

const pros = [
  { name: "food court", tech: "react", img: "/static/media/1.b530fc3b.jpg" },
  { name: "weather app", tech: "angular", img: "../../imges/2.jpg" },
  { name: "hand watch", tech: "UI", img: "../../imges/3.jpg" },
  { name: "company", tech: "js", img: "../../imges/4.jpg" },
];

const ang = pros.filter((pro) => pro.tech == "angular");
const rct = pros.filter((pro) => pro.tech == "react");
const js = pros.filter((pro) => pro.tech == "js");
const ui = pros.filter((pro) => pro.tech == "UI");

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
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class={toggle === 1 ? "nav-link active" : "nav-link"}
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
                class={toggle === 2 ? "nav-link active" : "nav-link"}
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
                class={toggle === 3 ? "nav-link active" : "nav-link"}
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
                class={toggle === 4 ? "nav-link active" : "nav-link"}
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
                class={toggle === 5 ? "nav-link active" : "nav-link"}
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
          <div class="tab-content" id="nav-tabContent">
            <div
              class={
                toggle === 1 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                {pros.map((e) => {
                  return (
                    <div className="col-12 col-md-6 col-lg-3">{e.img}</div>
                  );
                })}
              </div>
            </div>
            <div
              class={
                toggle === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              {ang.map((e) => {
                return <div>{e.name}</div>;
              })}{" "}
            </div>
            <div
              class={
                toggle === 3 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {rct.map((e) => {
                return <div className="">{e.name}</div>;
              })}
            </div>
            <div
              class={
                toggle === 4 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {js.map((e) => {
                return <div>{e.name}</div>;
              })}
            </div>{" "}
            <div
              class={
                toggle === 5 ? "tab-pane fade show active" : "tab-pane fade"
              }
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {ui.map((e) => {
                return <div>{e.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function single(pros) {
  return pros.array.forEach((element) => {
    return `<div>${element.name}</div>`;
  });
}
export default Projects;
