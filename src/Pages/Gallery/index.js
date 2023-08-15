import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Greeting from './ui/Greeting';
import FourthScene from './scene/FourthScene';
import SeventhScene from './scene/SeventhScene';

import './index.css';

function Gallery() {
  const [selectedScene, setSelectedScene] = useState(3);
  const navigate = useNavigate();

  const startPlay = () => {
    switch (selectedScene) {
      case 3:
        navigate('/gallery/fourth');
        break;
      case 6:
        navigate('/gallery/seventh');
        break;
      default:
        navigate('/gallery/fourth');
        break;
    }
  };

  return (
    <div id="gallery" className="app">
      <Routes>
        <Route
          path="/"
          element={
            <Greeting
              selected={selectedScene}
              onSelectScene={setSelectedScene}
              onPlay={startPlay}
            />
          }
        />

        <Route path="fourth" element={<FourthScene />} />
        <Route path="seventh" element={<SeventhScene />} />
      </Routes>
    </div>
  );
}

export default Gallery;
