import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contacts'
import Register from './components/Register'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/register" component={Contact} />
        <Route path="/hiring" component={Register} />
      </Router>
    </div>
  );
}

export default App;
