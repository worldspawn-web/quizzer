import { Route, Routes } from 'react-router-dom';
import { FC, lazy } from 'react';

import { routenames } from './routenames';
import { HomePage } from '../pages';

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<HomePage />} />
  </Routes>
);
