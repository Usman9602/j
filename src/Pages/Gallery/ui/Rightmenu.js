import React from 'react';
import { Link } from 'react-router-dom';
import './css/rightmenu.css';

const Rightmenu = (props) => {
  const goBack = () => {
    props.goBack();
  };

  return (
    <div id="rightmenu">
      <div className="content">
        <div className="buttons">
          <Link to={'/gallery'}>
            <button id="back_button" onClick={goBack}>
              Back
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rightmenu;
