import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import BookingDetails from './component/BookingDetails/BookingDetails';
import Home from './component/Home/Home';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route  path='/booking/:id' component={BookingDetails} />
    </Router>
  );
}

export default App;
