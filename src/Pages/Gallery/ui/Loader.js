import React from "react";
import { Html, useProgress } from "@react-three/drei";
import loader from "./img/loader.gif";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          position: "fixed",
          top: "-50vh",
          left: "-50vw",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          backgroundColor: "white",
        }}
      >
        <div>
          <img src={loader} alt="Loading..." />
          <div>
            <i>{Math.floor(progress)}% Loaded</i>
          </div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
