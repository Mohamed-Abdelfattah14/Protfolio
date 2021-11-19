import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
// import Aos from "aos";
// import 'aos/dist/aos.css'
// import Loading from './components/loading/Loading';
// import ClipLoader from "react-spinners/ClipLoader";
// import WOW from 'wowjs';
import { SpinnerInfinity } from "spinners-react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Aos.init();
  }, []);
  return (
    <>
      {loading ? (
        <div className="main-spiner">
          <SpinnerInfinity
            secondaryColor="rgba(0, 0, 0, 0.44)"
            color={"#008b8b"}
            loading={"true"}
            size={100}
          />
        </div>
      ) : (
        <Router basename={window.location.pathname || ""}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      )}
    </>
  );
}

export default App;
