import React from 'react';
import './css/leftmenu.css';

const Leftmenu = (props) => {
  const setAsset = (index) => {
    props.setAsset(index);
  };

  const renderContent = () => {
    return props.images.map((item, index) => {
      if (item.type === 'image') {
        return (
          <div key={index} className="image_item">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setAsset(index);
              }}
            >
              <img src={item.src} alt={props.itemTitle} loading="lazy" />
            </a>
          </div>
        );
      } else if (item.type === 'coin') {
        return (
          <div key={index} className="coin_item">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setAsset(index);
              }}
            >
              <p>{item.content}</p>
            </a>
          </div>
        );
      } else if (item.type === 'html') {
        return (
          <div key={index} className="html_item">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setAsset(index);
              }}
            >
              <iframe title="content" srcDoc={item.content}></iframe>
            </a>
          </div>
        );
      }
    });
  };

  return (
    <div id="leftmenu" className={props.className}>
      <div className="content">
        <h3>
          <span>Select Asset</span>
        </h3>
        <div className="scroll_box">
          <div className="item_cont">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Leftmenu;
