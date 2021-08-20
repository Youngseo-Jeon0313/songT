import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/nav';
import Transition from './components/transition';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Transition />
      </Router>
      <div><h1>학원실적</h1></div>


     </div>
  );
}

export default App;
