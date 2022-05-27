import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import CountriesCountainer from './Pages/CountriesContainer';
import Region from './Pages/RegionContainer';

const App = () => (
  <Router>
    <header>
      <Navbar />
    </header>
    <Routes>
      <Route path="/:country" element={<CountriesCountainer />} />
      <Route path="/" element={<Region />} />
    </Routes>
  </Router>
);

export default App;
