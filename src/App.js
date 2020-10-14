import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contacts'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Route path="/register" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
