import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipPage from './pages/StarshipPage/StarshipPage';
import NavBar from './components/NavBar/NavBar';
import Starship from './components/StarshipDetails/StarshipDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/starship-list' element={<StarshipPage />} />
        <Route path='/starship-detail' element={<Starship />} />
      </Routes>
    </div>
  );
}

export default App;