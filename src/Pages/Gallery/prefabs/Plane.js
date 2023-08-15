import React from 'react';
import { useBox } from '@react-three/cannon';

const Plane = ({ ...props }) => {
  const [ref] = useBox(() => ({ ...props }));

  return (
    <mesh ref={ref}>
      {/* <planeBufferGeometry {...props} />
      <meshPhongMaterial /> */}
    </mesh>
  );
};

export default Plane;
