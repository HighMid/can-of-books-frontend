import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><BestBooks /><Footer /></>}/>
        <Route path="/about" element={<><Header /><About /><Footer /></>}/>
      </Routes>
    </Router>
  );
}

export default App;
