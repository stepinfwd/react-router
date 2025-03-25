import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './blocks/navbar';
import NoMatch from './pages/404';
import { About } from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
