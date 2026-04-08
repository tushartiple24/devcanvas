import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import CanvasPage from './pages/Canvas'

import { useEffect, useState } from 'react';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/canvas" element={<CanvasPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </Router>
  )
}

export default App
