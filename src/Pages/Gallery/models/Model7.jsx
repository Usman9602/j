/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/assets/model5.glb --transform --simplify --shadows
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/model5-transformed.glb');

  return (
    <group {...props} dispose={null}>
      <group
        position={[-6.66, 2.48, -1.27]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor_floor_0.geometry}
          material={materials.floor}
          position={[5.37, -1.03, 0.96]}
        />
      </group>
      <group
        position={[-6.66, 1.98, -1.27]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.walls_walls_0.geometry}
          material={materials.walls}
          position={[5.37, -1.03, 1.37]}
        />
      </group>
      <group
        position={[10.19, -0.08, 5.49]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stairs_floor_0.geometry}
          material={materials.floor}
          position={[4.42, 8.22, 3.03]}
        />
      </group>
      <group
        position={[-6.66, 7.9, -1.27]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ceiling_walls_0.geometry}
          material={materials.walls}
          position={[5.37, -1.03, -3.4]}
        />
      </group>
      <group position={[12.38, -0.42, -1.27]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree2_tree_0.geometry}
          material={materials.tree}
          position={[-997.89, 330.26, 102.51]}
        />
      </group>
      <group
        position={[3.14, 2.94, -1.45]}
        rotation={[0, -0.93, 0]}
        scale={0.47}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Statue_low_statue_0.geometry}
          material={materials.statue}
          position={[-1.53, 1.57, 7.24]}
        />
      </group>
      <group
        position={[3.4, 2.49, -1.3]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.76, 0.76, 0.55]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stand_details_0.geometry}
          material={materials.details}
          position={[-4.5, -1.72, 2.15]}
        />
      </group>
      <group
        position={[18.74, 2.62, 3.14]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Window_details_0.geometry}
          material={materials.details}
          position={[2.53, 15.1, 0.92]}
        />
      </group>
      <group
        position={[-16.77, 7.3, -1.22]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lights_details_0.geometry}
          material={materials.details}
          position={[13.52, -0.99, -2.92]}
        />
      </group>
      <group
        position={[-6.66, 7.9, -1.27]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.skyLight_details_0.geometry}
          material={materials.details}
          position={[5.37, -1.03, -3.4]}
        />
      </group>
      <group
        position={[-1.05, 2.84, -1.33]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chairs_details_0.geometry}
          material={materials.details}
          position={[0.84, -1.07, 0.67]}
        />
      </group>
      <group
        position={[-7.45, 7.9, -10.54]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.corner_details_0.geometry}
          material={materials.details}
          position={[6.01, -8.5, -3.41]}
        />
      </group>
      <group
        position={[13.72, 3, 8.03]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.31, 0.11, 0.11]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.exitSign_details_0.geometry}
          material={materials.details}
          position={[-44.19, 71.55, 6.02]}
        />
      </group>
      <group
        position={[13.72, -0.07, 7.99]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doors_details_0.geometry}
          material={materials.details}
          position={[-11.06, 6.44, 3.03]}
        />
      </group>
      <group
        position={[-16.77, 7.3, -1.22]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.lights001_details_0.geometry}
          material={materials.details}
          position={[13.52, -0.99, -2.92]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/model5-transformed.glb');