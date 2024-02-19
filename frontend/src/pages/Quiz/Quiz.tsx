import { Link, useParams } from 'react-router-dom';

import { jsonParser } from '../../common';
import { ArrowPrev } from '../../assets';

import styles from './Quiz.module.scss';
import db from '../../data/quizList.json';

const Quiz = () => {
  const { id } = useParams();
  const { quizzes } = jsonParser(db);
  const { name, author, length, img } = quizzes[id];

  const newLink = `/test/${id}`;

  return (
    <div className={styles.quiz__wrapper}>
      <div className={styles.quiz}>
        <Link className={styles.quiz__back} to="/">
          <ArrowPrev />
        </Link>
        <h1 className={styles.quiz__header}>{name}</h1>
        <span className={styles.quiz__author}>{author}</span>
        <img className={styles.quiz__img} src={img} />
        <span className={styles.quiz__length}>{length} questions</span>
        <section className={styles.quiz__start}>
          <Link className={styles.quiz__btn} to={newLink}>
            START
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
