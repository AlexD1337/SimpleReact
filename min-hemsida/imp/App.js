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
      <div>
        <nav>
            <Link to="/">home</Link>
            <br />
            <Link to="/clicker">clicker</Link>
            <br />
            <Link to="/lock">locker</Link>
            <br />
            <Link to="/random">random</Link>
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
