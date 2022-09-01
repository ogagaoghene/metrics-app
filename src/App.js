import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './pages/Home';
import Country from './pages/Country';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/country/:continent" element={<Country />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
