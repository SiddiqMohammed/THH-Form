import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contacts'
import Register from './components/Register'
import Service from './components/ServiceFirebase'
import Service1 from './components/ServiceFirebase1'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/hiring" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/list" component={Service} />
        <Route path="/list1" component={Service1} />
      </Router>
    </div>
  );
}

export default App;
