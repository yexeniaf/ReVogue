import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState } from 'react';
import {verifyUser} from './screens/users';
import Home from './components/Home';
import ItemsContainer from './containers/ItemsContainer';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

useEffect (() => {
  const getUser = async () => {
    const user = await verifyUser()
    setCurrentUser(user)
  }
  getUser()
}, [])



  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/items" element= {<ItemsContainer />} />
        <Route path="/login" element= {<Login setCurrentUser={setCurrentUser}/>} />
        <Route path="/signup" element= {<Signup setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
