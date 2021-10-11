import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';

function App() {
  return (
    <Router>
     
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
      </Switch>
    </Router>
  );
}

export default App;
