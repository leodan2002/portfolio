import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/HomePage/HomePage';
 


function App() {
  return (
    <div className="App">
      <h1> Hello </h1>
      <Home />
    </div>
  );
}

export default App;
