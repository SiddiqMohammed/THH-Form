import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contacts'
import Register from './components/Register'
import Service from './components/ServiceFirebase'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/hiring" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/list" component={Service} />
      </Router>
    </div>
  );
}

export default App;
