import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Clicker from './pages/clicker';
import Random from './pages/random';
import Lock from './pages/lock';

function App() {
  return (
    <Router>
      <div className='container'>
        <nav className='nav'>

            <Link to="/" className='link' >home</Link>

            
            <Link to="/clicker" className='link'>clicker</Link>
           
 

            <Link to="/lock" className='link'>locker</Link>


            <Link to="/random" className='link'>random</Link>

        </nav>
        
         <Routes>
          <Route path="/clicker" element={<Clicker />} />
          <Route path="/lock" element={<Lock />} />
          <Route path="/random" element={<Random />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
