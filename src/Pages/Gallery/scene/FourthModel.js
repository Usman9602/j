import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Physics } from '@react-three/cannon';
import { extend, useThree } from '@react-three/fiber';

import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import Player from '../prefabs/Player';
import Plane from '../prefabs/Plane';
import BoxItem from '../prefabs/BoxItem';
import Loader from '../ui/Loader';
import { Model } from '../models/Model4';
import * as THREE from 'three';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const xyzr_range = [
  [-4.47, 4.47],
  [2.05, 2.97],
  [-14.47, -1.53],
  [-3.14, 3.14],
];

extend({ PointerLockControls });

function WhiteBackground() {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new THREE.Color(0xffffff); // Set the background color to white
  }, [scene]);

  return null;
}

const FourthtModel = (props) => {
  const { camera, gl } = useThree();
  gl.physicallyCorrectLights = true;

  const controls = useRef();
  const [p_pos, setPlayerPosition] = useState([0, 0.5, 1]);
  const [p_rot, setPlayerRotation] = useState([0, 0, 0]);

  const onBoxClicked = (value) => {
    controls.current.unlock();
    props.onLockChanged(false);
    props.onMenuOpened(value);
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

      {/* OG size is : 0.5 */}
      <ambientLight intensity={(0xffffff, 1.7)} />

      <Physics
        gravity={[0, -18, 0]}
        tolerance={0}
        iterations={50}
        broadphase={'SAP'}
      >
        <directionalLight
          position={[0, 10, 0]}
          intensity={6}
          castShadow={true}
          // receiveShadow={true}
        />
        <Suspense fallback={<Loader />}>
          {/* House model */}
          <Model position={[0, -0.6, 0]} />
          {/* Player  */}
          <Player position={p_pos} rotation={p_rot} />
          {/* Floor */}
          <Plane
            position={[0, -1, -1]}
            rotation={[-Math.PI / 2, 0, 0]}
            args={[200, 200, 0.1]}
          />

          {/* leftside (windows) */}
          <Plane
            position={[5.5, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            args={[30, 10, 0.1]}
          />
          {/*right side*/}
          <Plane
            position={[-5.5, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            args={[30, 10, 0.1]}
          />

          {/* back, (door)  */}
          <Plane
            position={[0, 0, -4.9]}
            rotation={[0, 0, 0]}
            args={[30, 10, 0.1]}
          />
          {/* front chemine */}
          <Plane
            position={[0, 0, 5]}
            rotation={[0, 0, 0]}
            args={[30, 10, 0.1]}
          />
          <BoxItem
            key={2}
            onBoxClicked={onBoxClicked1}
            position={[-0.13, 1.8, 5.77]}
            rotation={[0, -Math.PI, 0]}
            scale={[1.5, 1.95, 0.05]}
            index={2}
            type={'htmlx'}
            url={'x'}
            itemid={'panel_windowsss'}
          />
          {props.items.map((item, index) => (
            <BoxItem
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
          ))}
          <WhiteBackground />
        </Suspense>
      </Physics>
    </>
  );
};
export default FourthtModel;
