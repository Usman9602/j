import React, { useState, useEffect } from 'react';
import img4 from './img/60.png';
import img7 from './img/100.png';

import poster from '../../../Assets/2095.png';
import './css/greeting.css';

const Greeting = (props) => {
  const [connect2, setConnect] = useState(false);

  const onPlay = () => {
    props.onPlay();
  };

  const onSelectScene = (index) => {
    props.onSelectScene(index);
  };

  return (
    <div className="greeting-main">
      {connect2 ? (
        <div id="greeting">
          <p>Welcome</p>
          <div className="img_container">
            <img
              onClick={() => onSelectScene(6)}
              src={img7}
              alt=""
              className={`${props.selected === 6 ? 'scale' : ''}`}
            />
            <img
              onClick={() => onSelectScene(3)}
              src={img4}
              alt=""
              className={`${props.selected === 3 ? 'scale' : ''}`}
            />
          </div>
          <div className="content">
            <button
              id="play_button"
              onClick={() => {
                onPlay();
              }}
            >
              Enter
            </button>

            <div id="gamepadtest"></div>
          </div>
        </div>
      ) : (
        <div id="greeting">
          <div className="img_container2">
            <img src={poster} alt="preview" />
          </div>
          <div className="content">
            <div className="contentH">
              <h2>
                <b>Main Controls:</b>
              </h2>
              <p>
                <span className="colors">ESC</span> shifts mouse focus from
                gallery to browser.
              </p>
              <p>
                <span className="colors">Arrow Keys</span> Move Around
              </p>
              <p>
                <span className="colors">Mouse </span> Look Around
              </p>
              <p>
                <span className="colors">Spacebar</span> Jump
              </p>
            </div>
            <button
              onClick={() => {
                setConnect((prev) => !prev);
              }}
              id="connect_button"
            >
              CONNECT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Greeting;
