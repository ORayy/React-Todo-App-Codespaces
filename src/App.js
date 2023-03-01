// pages
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import Create from './pages/Create';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <main>
        
        <Navbar  />

        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='help' element={<Help />} />
          <Route path='create' element={<Create />} />
        </Routes>

      </main>
    </BrowserRouter >
  );
}

export default App;
