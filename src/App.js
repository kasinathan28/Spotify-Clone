import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Modules imported
import Auth from './modules/Auth/Auth';
import Index from './modules/Index/Index';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Auth/>}/>
        <Route path="/index/:id" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
