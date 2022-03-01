import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useEffect, useState } from 'react';
import {verifyUser} from './services/users';
import Home from './components/Home';
import ItemsContainer from './containers/ItemsContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateItem from './components/CreateItem';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

useEffect (() => {
  const getUser = async () => {
    const user = await verifyUser()
    setCurrentUser(user)
  }
  getUser()
}, [])


  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/items/*" element= {<ItemsContainer  currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/login" element= {<Login setCurrentUser={setCurrentUser}/>} />
        <Route path="/signup" element= {<Signup setCurrentUser={setCurrentUser} />} />
        <Route path='/items/create' element={currentUser.is_admin ? <CreateItem /> : <Error />} />
        
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
