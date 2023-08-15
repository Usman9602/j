import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAddress } from 'sats-connect';

const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  async function signin(users) {
    try {
      var addy = 'xxx';
      const getAddressOptions = {
        payload: {
          purposes: ['ordinals', 'payment'],
          message: 'Address for receiving Ordinals',
          network: {
            type: 'Mainnet',
          },
        },
        onFinish: (response) => {
          setUser({ account: response.addresses[0].address });
          addy = response.addresses[0].address;
        },
        onCancel: () => alert('Request canceled'),
      };
      await getAddress(getAddressOptions);
      return addy;
    } catch (error) {
      return navigate('/gallery');
    }
  }

  return (
    <AuthContext.Provider value={{ user, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
