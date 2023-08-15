import React from 'react';
import Gallery from './Pages/Gallery';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/gallery/*" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
