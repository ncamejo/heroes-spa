import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage/>} />

        <Route path='/*' element={<HeroesRoutes/>} /> // Esto indica que, cualquier ruta que no sea el login, desplegara el nuevo componente.
      </Routes>
    </>
  );
};
