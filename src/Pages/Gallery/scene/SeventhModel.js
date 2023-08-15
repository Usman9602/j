import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Physics, Debug } from '@react-three/cannon';
import { extend, useThree } from '@react-three/fiber';

import { PointerLockControls } from 'three-stdlib';
import Player from '../prefabs/Player';
import Plane from '../prefabs/Plane';
import BoxItem1 from '../prefabs/BoxItem';
import Loader from '../ui/Loader';
import { Model } from '../models/Model7';

const xyzr_range = [
  [0.75, 15.45],
  [2.05, 6.0],
  [0.55, 28.95],
  [-3.14, 3.14],
];

extend({ PointerLockControls });

const SeventhModel = (props) => {
  const { camera, gl } = useThree();
  const controls = useRef();
  // 18.45, 2.05, 0
  const [p_pos, setPlayerPosition] = useState([-0.2, 4.7, 3.93]);
  const [p_rot, setPlayerRotation] = useState([0, 1.5, 0]);

  const onBoxClicked = (value) => {
    props.onLockChanged(false);
    props.onMenuOpened(value);
    controls.current.unlock();
  };
  const onBoxClicked1 = (value) => {
    controls.current.lock();
    props.onLockChanged(true);
  };

  const isNumeric = (str) => {
    if (typeof str != 'string') return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  };

  const isCoordsValid = (xyzr) => {
    if (xyzr.length !== 4) return false;
    for (let i = 0; i < xyzr.length; i++) {
      if (!isNumeric(xyzr[i])) return false;
      if (!(xyzr[i] >= xyzr_range[i][0] && xyzr[i] <= xyzr_range[i][1])) {
        return false;
      }
    }
    return true;
  };

  const getPlayerPosition = () => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const coords = parameters.get('coords');
    if (coords) {
      let xyzr = coords.split('x');
      if (isCoordsValid(xyzr)) {
        let xyz = xyzr.slice(0, 3);
        xyz = xyz.map((v) => parseFloat(v));
        setPlayerPosition(xyz);
        let ry = parseFloat(xyzr[3]);
        setPlayerRotation([0, ry, 0]);
      }
    }
  };

  useEffect(() => {
    getPlayerPosition();
  }, []);

  // useEffect(() => {
  //   if (!props.account) {
  //     let url =
  //       window.location.protocol + '//' + window.location.host + '/gallery/';
  //     window.open(url, '_self');
  //   }
  // }, []);

  useEffect(() => {
    camera.layers.enable(0);
    camera.layers.enable(1);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useEffect(() => {
    const handleFocus = () => {
      controls.current.lock();
      props.onLockChanged(true);
    };
    controls.current.addEventListener('lock', () => {
      props.onLockChanged(true);
    });
    controls.current.addEventListener('unlock', () => {
      props.onLockChanged(false);
    });
    gl.domElement.addEventListener('click', handleFocus);
    return;
  }, [gl]);

  return (
    <>
      <pointerLockControls ref={controls} args={[camera, gl.domElement]} />
      {/* og 0.015 */}
      <ambientLight intensity={1} />
      <Physics
        drawDebug
        gravity={[0, -18, 0]}
        tolerance={0}
        iterations={50}
        broadphase={'SAP'}
      >
        {/* <Debug color="#f30"> */}
        <Suspense fallback={<Loader />}>
          {/* House model */}
          <Model position={[0, 0, 0]} />
          {/* Player  */}
          <Player position={p_pos} rotation={p_rot} />
          {/* Floor */}
          <Plane args={[38, 0.1, 22]} />
          {/* Floor up*/}
          <Plane args={[38, 0.1, 22]} position={[-14, 2.4, 0]} />
          {/* Front */}
          <Plane
            args={[19, 12, 0.1]}
            position={[19, 0, -1]}
            rotation={[0, Math.PI / 2, 0]}
          />
          {/* Back */}
          <Plane
            args={[19, 12, 0.1]}
            position={[-19, 0, -1]}
            rotation={[0, Math.PI / 2, 0]}
          />
          {/* Left */}
          <Plane
            args={[38, 12, 0.1]}
            position={[0, 0, 8]}
            rotation={[0, 0, 0]}
          />
          {/* Right */}
          <Plane
            args={[38, 12, 0.1]}
            position={[0, 0, -10.5]}
            rotation={[0, 0, 0]}
          />
          {/* Boundry */}
          <Plane
            args={[19, 4.5, 0.1]}
            position={[6, 0, -1]}
            rotation={[0, Math.PI / 2, 0]}
          />
          {/* Stair left */}
          <Plane
            args={[10, 5, 0.1]}
            position={[10, 0, 5.5]}
            rotation={[Math.PI / 2, Math.PI / 1.2, 0]}
          />
          {/* Stair right */}
          <Plane
            args={[10, 5, 0.1]}
            position={[10, 0, -8]}
            rotation={[Math.PI / 2, Math.PI / 1.2, 0]}
          />
          <BoxItem1
            key={2}
            onBoxClicked={onBoxClicked1}
            position={[16.94, 4, -1]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[7, 3, 0.05]}
            index={2}
            type={'htmlx'}
            url={'x'}
            itemid={'panel_windowsss'}
          />
          {/* {props.items.map((item, index) => (
            <BoxItem1
              key={index}
              onBoxClicked={onBoxClicked}
              position={item.position}
              rotation={item.rotation}
              scale={item.scale}
              index={index}
              type={item.type}
              url={item.url}
              itemid={item.id}
            />
          ))} */}
          {/* <Environment
            background={true}
            files={'neigh2.hdr'}
            path={'/assets/'}
            preset={null}
            scene={undefined}
          /> */}
        </Suspense>
        {/* </Debug> */}
      </Physics>
    </>
  );
};

export default SeventhModel;
