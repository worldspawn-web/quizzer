import { Route, Routes } from 'react-router-dom';
import { FC, lazy } from 'react';

import { routenames } from './routenames';
import { HomePage } from '../pages';

const QuizPage = lazy(() => import('../pages/Quiz/Quiz'));
const TestPage = lazy(() => import('../pages/Test/Test'));

export const Router: FC = () => (
  <Routes>
    <Route path={routenames.HOME} element={<HomePage />} />
    <Route path={routenames.QUIZ_PAGE} element={<QuizPage />} />
    <Route path={routenames.QUIZ_TEST} element={<TestPage />} />
  </Routes>
);
