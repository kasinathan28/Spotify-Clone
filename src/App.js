import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Auth from './modules/Auth/Auth';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
