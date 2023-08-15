import React from "react";
import styled from "styled-components";

const ScreenContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   display: flex;
   -khtml-user-select: none;
   -o-user-select: none;
   -moz-user-select: none;
   -webkit-user-select: none;
   user-select: none;
`;

const UI = ({ children }) => {
   return <ScreenContainer>{children}</ScreenContainer>;
};

export default UI;
