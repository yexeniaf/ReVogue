import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState } from 'react';
import Home from './components/Home';
import ItemsContainer from './containers/ItemsContainer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/items" element= {<ItemsContainer />} />
        <Route path="/login" element= {<Login />} />
        <Route path="/signup" element= {<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
