import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectPage/ProjectPage'
import ResumePage from './pages/ResumePage/ResumePage'
import ContactPage from './pages/ContactPage/ContactPage';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/ResumeCard/ResumeCard';
 


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route 
            path="/"
            element={<Home/>}
            exact
          />
          <Route 
            path="/skills"
            element={<Skills/>}
            exact
          />
          <Route 
            path="/projects"
            element={<ProjectPage/>}
            exact
          />
          <Route 
            path="/resume"
            element={<ResumePage/>}
            exact
          />
          <Route 
            path="/contact"
            element={<ContactPage/>}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
