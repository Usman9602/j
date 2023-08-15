import React from 'react';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';

const SPEED = 5;
const keys = {
  KeyW: 'forward',
  KeyS: 'backward',
  KeyA: 'left',
  KeyD: 'right',
  Space: 'jump',
  ArrowUp: 'forward',
  ArrowDown: 'backward',
  ArrowLeft: 'left',
  ArrowRight: 'right',
};
const moveFieldByKey = (key) => keys[key];
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const speed = new THREE.Vector3();
var LIMIT = 60;

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });
  useEffect(() => {
    const handleKeyDown = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);
  return movement;
};

const Player = ({ position, rotation }) => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    args: [0.5, 64, 64],
    position: position,
  }));

  const { forward, backward, left, right, jump } = usePlayerControls();
  const { camera } = useThree();
  const velocity = useRef([0, 0, 0]);

  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
    camera.rotation.order = 'YXZ';
    camera.rotateY(rotation[1]);
    api.rotation.set(0, 0, 0);
    api.angularVelocity.set(0, 0, 0);
    api.fixedRotation = true;
  }, [api, camera, rotation]);

  useFrame((state) => {
    if (window.history.replaceState) {
      if (LIMIT > 0) {
        LIMIT -= 1;
      } else {
        let coords =
          camera.position.x.toFixed(2) +
          'x' +
          camera.position.y.toFixed(2) +
          'x' +
          camera.position.z.toFixed(2) +
          'x' +
          camera.rotation.y.toFixed(2);
        let newurl =
          window.location.protocol +
          '//' +
          window.location.host +
          window.location.pathname +
          '?coords=' +
          coords;
        window.history.replaceState({ path: newurl }, '', newurl);
        LIMIT = 60;
      }
    }

    ref.current
      .getWorldPosition(camera.position)
      .add(new THREE.Vector3(0, 1.5, 0));
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 5, velocity.current[2]);
  });

  return (
    <>
      <mesh ref={ref}></mesh>
    </>
  );
};

export default Player;
