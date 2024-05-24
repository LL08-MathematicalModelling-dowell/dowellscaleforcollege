import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from './Components/Home';
import ScaleReport from './Components/Report';
import Demo from './Components/Demo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='dowellscale' Component={HomePage} />
        <Route path='/scalereport' Component={ScaleReport} />
        <Route path='/demo' Component={Demo} />
      </Routes>
    </div>
  );
}

export default App;

