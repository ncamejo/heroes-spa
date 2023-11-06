import { useReducer } from 'react';
import { AuthContex } from './AuthContex';
import { authReducer } from './authReducer';

import { types } from '../types/types';

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name,
      },
    };
    dispatch(action);
  };

  return (
    <AuthContex.Provider
      value={{
        ...authState,
        login: login,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};
