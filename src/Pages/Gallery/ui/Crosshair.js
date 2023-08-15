import React from 'react';
import styled from 'styled-components';

const CrosshairStyle = styled.div`
  height: 8px;
  width: 8px;
  background-color: white;
  border-radius: 50%;
  border: solid 1px gray;
  margin: auto;
  z-index: 100;
`;

const Crosshair = () => {
  return <CrosshairStyle />;
};

export default Crosshair;
