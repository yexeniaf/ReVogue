import './App.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<h1>Welcome to the homepage</h1>} />
        <Route path="/items" element= {<h1>Items Page</h1>} />
        <Route path="/login" element= {<h1>Login Page</h1>} />
        <Route path="/signup" element= {<h1>Sign Up Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
