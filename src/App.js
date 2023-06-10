import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchGreeting } from './greeting/greetingsSlice';

import Greeting from './components/Greeting';
import Home from './components/Home';

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
