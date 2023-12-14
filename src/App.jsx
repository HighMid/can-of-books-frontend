import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import CreateForm from './CreateForm';
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
        <Route path="/createform" element={<><Header /><CreateForm /><Footer /></>}/>
      </Routes>
    </Router>
  );
}



export default App;
