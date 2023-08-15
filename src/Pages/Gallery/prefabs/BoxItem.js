import { Html } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { Color, TextureLoader, MeshBasicMaterial } from 'three';
import '../ui/css/panels.css';
import * as THREE from 'three';
import html2canvas from 'html2canvas';

const GOLDENRATIO = 1.6;

const BoxItem = ({
  index,
  type,
  url,
  itemid,
  color = new Color(),
  scale,
  light,
  ...props
}) => {
  const frame = useRef();
  const material = useRef();
  const meshRef = useRef();

  const boxClicked = (itemid) => {
    props.onBoxClicked(itemid);
  };
  // useEffect(() => {
  //   // Create an iframe and append it to the document
  //   const iframe = document.createElement('iframe');
  //   iframe.src = `https://www.youtube.com/embed/jfKfPfyJRdk?start=0&autoplay=1&mute=0&playsinline=1&enablejsapi=1&rel=0&loop=1&controls=0&fs=0&modestbranding=0&rel=1&modestbranding=1`;
  //   iframe.style.width = '1024px';
  //   iframe.style.height = '1024px';
  //   iframe.style.position = 'absolute';
  //   iframe.style.visibility = 'hidden';
  //   document.body.appendChild(iframe);

  //   // Capture the content of the iframe after it has loaded
  //   iframe.onload = () => {
  //     html2canvas(iframe.contentDocument.body).then((canvas) => {
  //       // Create a texture from the captured content
  //       const textureLoader = new TextureLoader();
  //       const texture = textureLoader.load(canvas.toDataURL());

  //       // Apply the texture to the mesh
  //       const material = new MeshBasicMaterial({ map: texture });
  //       meshRef.current.material = material;
  //     });
  //   };

  //   // Remove the iframe when the component is unmounted
  //   return () => {
  //     document.body.removeChild(iframe);
  //   };
  // }, [url]);

  useEffect(() => {
    if (type === 'coin') {
      material.current.map = null;
      material.current.color.set(0x000000);
      material.current.needsUpdate = true;
    } else {
      if (url) {
        const textureLoader = new TextureLoader();
        textureLoader.load(url, (texture) => {
          texture.encoding = THREE.sRGBEncoding;

          texture.minFilter = THREE.NearestFilter;
          texture.magFilter = THREE.NearestFilter;
          texture.generateMipmaps = false;
          texture.anisotropy = 1;
          material.current.map = texture;
          material.current.color.set(0xffffff);
          material.current.needsUpdate = true;
        });
      }
    }
  }, [type, url]);
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        name={itemid}
        scale={scale}
        onClick={(e) => boxClicked(itemid)}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          castShadow
          receiveShadow
          raycast={() => null}
          position={[0, 0, 0.2]}
          scale={[0.9, 0.9, 0.9]}
        >
          <boxGeometry />
          <meshBasicMaterial ref={material} />
          {type === 'htmlx' && (
            <Html
              wrapperClass="laptop"
              transform
              position={[0, 0, 0.5]}
              distanceFactor={1.5}
              rotation-x={-0.25}
            >
              {/* <iframe
                style={{ width: '760px', height: '515px' }}
                // src="https://www.youtube.com/embed/ha0LOoWK3Iw?start=0&autoplay=1&mute=0&playsinline=1&enablejsapi=1&rel=0&playlist=enYdAxVcNZA&loop=1&controls=1&fs=0&modestbranding=1"
                src="https://www.youtube.com/embed/ha0LOoWK3Iw?start=0&autoplay=1&mute=1"
                title="YOUR NEW MORNING ALARM"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                id="widget2"
              ></iframe> */}
              <iframe
                style={{ width: '760px', height: '415px' }}
                src="https://www.youtube.com/embed/jfKfPfyJRdk?start=0&autoplay=1&mute=0&playsinline=1&enablejsapi=1&rel=0&loop=1&controls=0&fs=0&modestbranding=0&rel=1&modestbranding=1"
                title="Lofi"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Html>
          )}
          {type === 'coin' && (
            <Html
              transform
              occlude
              position={[0, 0, 0.5]}
              scaleFactor={20}
              scale={[1, 1 * 0.6, 1]}
            >
              <div
                className="panel-div"
                onClick={(e) => {
                  boxClicked(itemid);
                  url = props.url;
                }}
              >
                {url}
              </div>
            </Html>
          )}
        </mesh>
      </mesh>
    </group>
  );
};

export default BoxItem;
