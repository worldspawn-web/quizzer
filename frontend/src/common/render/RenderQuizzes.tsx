import { Link } from 'react-router-dom';
import { jsonParser } from '..';
import db from '../../data/quizList.json';

import styles from './RenderQuizzes.module.scss';

export const RenderQuizzes = () => {
  const { quizzes } = jsonParser(db);
  return (
    <>
      {Object.keys(quizzes).map((quizId) => {
        const quiz = quizzes[quizId];
        const { name, img, link } = quiz;
        return (
          <Link to={link} className={styles.quiz__wrapper}>
            <img className={styles.quiz__img} src={img} />
            <p className={styles.quiz__text}>{name}</p>
          </Link>
        );
      })}
    </>
  );
};
