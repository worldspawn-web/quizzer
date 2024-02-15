import { useParams } from 'react-router-dom';

import { jsonParser } from '../../common';
import db from '../../data/quizList.json';

import styles from './Quiz.module.scss';

const Quiz = () => {
  const { id } = useParams();
  const { quizzes } = jsonParser(db);
  const { name, author, length, img } = quizzes[id];

  return (
    <div className={styles.quiz__wrapper}>
      <div className={styles.quiz}>
        <h1 className={styles.quiz__header}>{name}</h1>
        <span className={styles.quiz__author}>{author}</span>
        <img className={styles.quiz__img} src={img} />
        <span className={styles.quiz__length}>{length} questions</span>
        <section className={styles.quiz__start}>
          <a className={styles.quiz__btn}>START</a>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
