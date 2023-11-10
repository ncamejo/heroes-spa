import { authReducer, types } from '../../../src/auth/';

describe('Prueba en authReducer', () => {
  test('Debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('Debe de (login) llamar el login authenticar y establecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'David',
        id: '123',
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      ...state,
      logged: true,
      user: action.payload,
    });
  });

  test('Debe de (logout) borrar el name del usuarioy logged en false', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'David',
        id: '123',
      },
    };

    const state = authReducer({ logged: true, user: action.payload }, {type: types.logout});
    expect(state).toEqual({ logged: false });
  });
});
