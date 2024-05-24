import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './Components/Home';
import ScaleReport from './Components/Report';
import Demo from './Components/Demo';
import Evaluate from './Components/Evaluate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='dowellscale' Component={HomePage} />
        <Route path='/scalereport' Component={ScaleReport} />
        <Route path='/demo' Component={Demo} />
        <Route path='/evaluate' Component={Evaluate} />
      </Routes>
    </div>
  );
}

export default App;

