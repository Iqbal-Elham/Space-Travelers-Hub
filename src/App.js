import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<div><h1>Rockets</h1></div>} />
          <Route path="/missions" element={<h1>Missions</h1>} />
          <Route path="/my-profile" element={<h1>My profile</h1>} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
