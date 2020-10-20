import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contacts'
import Register from './components/Register'
import ClientSurvey from './components/ClientSurvey'
import Service from './components/ServiceFirebase'
import Service1 from './components/ServiceFirebase1'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/hiring" component={Contact} />
        <Route path="/register" component={Register} />
        <Route path="/client-survey" component={ClientSurvey} />
        <Route path="/register_list" component={Service} />
        <Route path="/hiring_list" component={Service1} />
      </Router>
    </div>
  );
}

export default App;
