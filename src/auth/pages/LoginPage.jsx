import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../context/AuthContex';

export const LoginPage = () => {

const {login} = useContext(AuthContex)

  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/'
    login('Néstor Camejo')
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />

      <button onClick={onLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  );
};
