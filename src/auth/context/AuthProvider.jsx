import { useReducer } from 'react';
import { AuthContex } from './AuthContex';
import { authReducer } from './authReducer';

import { types } from '../types/types';

// const initialState = {
//   logged: false,
// };

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name = '') => {
    const user = {
      id: 'ABC',
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('user', JSON.stringify(user));

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
