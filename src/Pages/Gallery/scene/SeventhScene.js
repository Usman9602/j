import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';
import { doc, setDoc, getDoc, updateDoc, Timestamp } from 'firebase/firestore';
import { useAuth } from '../AuthContext';
import SeventhModel from './SeventhModel';
import Leftmenu from '../ui/Leftmenu';
import Rightmenu from '../ui/Rightmenu';
import Crosshair from '../ui/Crosshair';
import UI from '../ui/UI';
import { fifth_scene } from '../data';
import img1 from '../../../Assets/2095.png';
import { useInput } from '../InputContext';

const SeventhScene = (props) => {
  const [showCrosshair, setShowCrosshair] = useState(false);
  const [showLeftmenu, setShowLeftmenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [items, setItems] = useState(fifth_scene);
  const [nfts, setNfts] = useState([img1]);
  const { user, signin } = useAuth();
  const { inputValue, isLoaded } = useInput();

  const isLocked = useRef(false);
  const navigate = useNavigate();
  const docId = useRef();

  useEffect(() => {
    const sign = async () => {
      const accounts = [];
      let account = 'xxx';
      if (!account) {
        return navigate('/gallery');
      }
      if (isLoaded) {
        accounts.push(account, inputValue);
      }
      docId.current = account + '_scene_7';
      await getData();
      var ids = [{ type: 'image', src: img1 }];

      setNfts(ids);
    };
    sign();
  }, [isLoaded, inputValue]);

  const onMenuOpened = (itemid) => {
    if (!showLeftmenu) {
      let _item = items.find((item) => item.id === itemid);
      setSelectedItem(_item);
      setShowLeftmenu(true);
    }
  };

  const onLockChanged = (value) => {
    isLocked.current = value;
    setShowCrosshair(value);
    if (value) setShowLeftmenu(false);
  };

  const setAsset = (index) => {
    let _items = [...items];

    let _item = _items.find((item) => item.id === selectedItem.id);
    if (nfts[index].type === 'image') {
      _item.url = nfts[index].src;
      _item.type = nfts[index].type;
    }
    if (nfts[index].type === 'coin') {
      _item.url = nfts[index].content;
      _item.type = nfts[index].type;
    }
    if (nfts[index].type === 'html') {
      _item.url = nfts[index].content;
      _item.type = nfts[index].type;
    }

    setItems(_items);
    saveData();
  };

  const goBack = () => {
    setSelectedItem(null);
    setShowLeftmenu(false);
  };

  const getPanelsData = () => {
    let panels = items.map((item) => ({
      id: item.id,
      type: item.type,
      url: item.url,
    }));
    return panels;
  };

  const saveData = async () => {
    if (!user.account) return signin();
    try {
      const docRef = doc(db, 'nfts', docId.current);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        updateDoc(docRef, {
          panels: getPanelsData(),
          updated: Timestamp.now(),
        });
        // .then(() => {
        //   alert('Saved successfully');
        // });
      } else {
        setDoc(
          docRef,
          {
            id: docId.current,
            user_id: user.account,
            scene_id: 'scene_7',
            panels: getPanelsData(),
            created: Timestamp.now(),
            updated: Timestamp.now(),
          },
          {
            merge: true,
          }
        );
        // .then(() => {
        //   alert('Saved successfully');
        // });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getData = async () => {
    try {
      const docRef = doc(db, 'nfts', docId.current);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let data = docSnap.data();
        let _items = [];
        data.panels.forEach((panel) => {
          let _item = items.find((item) => item.id === panel.id);
          _item.type = panel.type;
          _item.url = panel.url;
          _items.push(_item);
        });
        setItems(_items);
      } else {
        console.log('No such document!');
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <UI>{showCrosshair && <Crosshair />}</UI>
      <Canvas
        // gl={{ antialias: false }}

        shadowMap
        raycaster={{
          computeOffsets: (_, { size: { width, height } }) => {
            if (isLocked.current) {
              return {
                offsetX: width / 2,
                offsetY: height / 2,
              };
            } else {
              return null;
            }
          },
        }}
      >
        {/* <div id="portal"></div> */}
        <SeventhModel
          onLockChanged={onLockChanged}
          onMenuOpened={onMenuOpened}
          items={items}
        />
      </Canvas>

      <Leftmenu
        className={showLeftmenu ? '' : 'hide'}
        images={nfts}
        setAsset={setAsset}
        itemTitle={selectedItem ? selectedItem.title : ''}
      />
      <Rightmenu goBack={goBack} />
    </>
  );
};

export default SeventhScene;
