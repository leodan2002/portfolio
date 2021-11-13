import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './pages/HomePage/HomePage';
// import ProjectPage from './pages/ProjectPage/ProjectPage'
import ResumePage from './pages/ResumePage/ResumePage'
 


function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      {/* <ProjectPage /> */}
      < ResumePage />
    </div>
  );
}

export default App;
