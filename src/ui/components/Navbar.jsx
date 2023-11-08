import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../auth/context/AuthContex';

export const Navbar = () => {
  const { user, logout } = useContext(AuthContex);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true,
    });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <Link className='navbar-brand' to='/'>
        Asociaciones
      </Link>

      <div className='navbar-collapse'>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/dc'
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/search'
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>{user?.name}</span>
          {/* Se coloca el signo de interrogacion para que si el valor es nulo no continue */}
          <button onClick={onLogout} className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
