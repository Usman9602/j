import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Model(props) {
  const { nodes, materials } = useGLTF('/assets/neo_classical.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier002_details_0.geometry}
        material={materials.details}
        position={[-0.212, 2.249, 0.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier004_details_0.geometry}
        material={materials.details}
        position={[-0.212, 2.852, 0.204]}
        rotation={[0, -0.428, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier005_furniture_0.geometry}
        material={materials.furniture}
        position={[-2.357, 2.67, -5.182]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier006_furniture_0.geometry}
        material={materials.furniture}
        position={[2.174, 2.67, -5.182]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier007_furniture_0.geometry}
        material={materials.furniture}
        position={[2.203, 2.67, 5.587]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier008_furniture_0.geometry}
        material={materials.furniture}
        position={[-2.328, 2.67, 5.587]}
        rotation={[-Math.PI, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier009_details_0.geometry}
        material={materials.details}
        position={[-0.212, 2.852, 0.204]}
        rotation={[0, -0.428, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier010_furniture_0.geometry}
        material={materials.furniture}
        position={[-5.506, 2.67, -2.043]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier011_furniture_0.geometry}
        material={materials.furniture}
        position={[-5.506, 2.67, 2.495]}
        rotation={[0, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_walls_0.geometry}
        material={materials.walls}
        position={[-0.11, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_walls_0.geometry}
        material={materials.walls}
        position={[-0.077, -0.045, 1.729]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.769, 2.338, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_walls_0.geometry}
        material={materials.walls}
        position={[-0.11, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_walls_0.geometry}
        material={materials.walls}
        position={[-0.093, 3.435, -5.368]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_walls_0.geometry}
        material={materials.walls}
        position={[-2.357, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_furniture_0.geometry}
        material={materials.furniture}
        position={[-0.011, -0.343, 6.24]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={3.56}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_walls_0.geometry}
        material={materials.walls}
        position={[-0.153, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_furniture_0.geometry}
        material={materials.furniture}
        position={[-0.115, 0.052, 0.471]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.369}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_walls_0.geometry}
        material={materials.walls}
        position={[0.648, -0.021, -5.799]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_walls_0.geometry}
        material={materials.walls}
        position={[2.259, -0.045, 0.37]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018_walls_0.geometry}
        material={materials.walls}
        position={[-0.11, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021_walls_0.geometry}
        material={materials.walls}
        position={[-5.711, 3.448, 0.204]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022_walls_0.geometry}
        material={materials.walls}
        position={[-0.055, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube026_walls_0.geometry}
        material={materials.walls}
        position={[-6.107, -0.021, -0.521]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube027_walls_0.geometry}
        material={materials.walls}
        position={[-0.11, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube028_walls_0.geometry}
        material={materials.walls}
        position={[-0.11, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube029_walls_0.geometry}
        material={materials.walls}
        position={[-0.11, -0.045, 0.204]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1.881, 1.881, 1.369]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109_furniture_0.geometry}
        material={materials.furniture}
        position={[-0.011, -0.343, 6.24]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={3.56}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.curtain_furniture_0.geometry}
        material={materials.furniture}
        position={[5.497, 0, 0.194]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[0.985, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001_furniture_0.geometry}
        material={materials.furniture}
        position={[2.966, 0.557, 2.082]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002_furniture_0.geometry}
        material={materials.furniture}
        position={[1.762, 0.555, -2.492]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003_furniture_0.geometry}
        material={materials.furniture}
        position={[-1.974, 0.554, -2.532]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004_walls_0.geometry}
        material={materials.walls}
        position={[6.158, -0.011, -2.702]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.599}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005_furniture_0.geometry}
        material={materials.furniture}
        position={[5.771, 0.512, 0.095]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_walls_0.geometry}
        material={materials.walls}
        position={[6.158, -0.011, 2.693]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.599}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007_details_0.geometry}
        material={materials.details}
        position={[-0.211, 3.354, 0.203]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009_furniture_0.geometry}
        material={materials.furniture}
        position={[-0.243, 0.581, 0.649]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.559}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010_furniture_0.geometry}
        material={materials.furniture}
        position={[-2.852, 0.556, 2.088]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GrowFX01_details_0.geometry}
        material={materials.details}
        position={[-0.285, 0.817, 0.612]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006_furniture_0.geometry}
        material={materials.furniture}
        position={[0.368, 1.485, 6.139]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.905, 2.074, 2.074]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa001_furniture_0.geometry}
        material={materials.furniture}
        position={[2.812, -0.045, 0.238]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa002_furniture_0.geometry}
        material={materials.furniture}
        position={[-0.083, -0.045, -2.286]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sofa004_furniture_0.geometry}
        material={materials.furniture}
        position={[-2.671, -0.045, 0.238]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table001_furniture_0.geometry}
        material={materials.furniture}
        position={[1.797, -0.057, -2.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table002_furniture_0.geometry}
        material={materials.furniture}
        position={[-2.004, -0.057, -2.515]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table003_furniture_0.geometry}
        material={materials.furniture}
        position={[-2.829, -0.057, 2.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table004_furniture_0.geometry}
        material={materials.furniture}
        position={[5.742, -0.101, 0.117]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table005_furniture_0.geometry}
        material={materials.furniture}
        position={[2.989, -0.057, 2.11]}
      />
    </group>
  );
}

useGLTF.preload('/assets/neo_classical.glb');
