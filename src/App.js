import './App.css';
import MovingButton from './components/MovingButton';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wishing from './components/Wishing';
import Home from './components/Home';

import Particles from './components/Particles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovingButton />} />
        <Route path="/wishing" element={<Wishing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
            <Particles id='particles'/>
    </BrowserRouter>
  );
}

export default App;
