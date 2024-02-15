import { RenderQuizzes } from '../../common';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header__wrapper}>
        <h1>Quizzer</h1>
      </header>
      <section className={styles.page__quizzes}>
        <div className={styles.page__quizzes__hot}>
          <span>Hot!🔥</span>
          <div className={styles.quizzes__wrapper}>
            <RenderQuizzes />
          </div>
        </div>
        <div className={styles.page__quizzes__new}>
          New Quizzes👻
          <div className={styles.quizzes__wrapper}>
            <RenderQuizzes />
          </div>
        </div>
        <div className={styles.page__quizzes__updated}>
          <span>Recently Updated🔃</span>
          <div className={styles.quizzes__wrapper}>
            <RenderQuizzes />
          </div>
        </div>
      </section>
      <footer></footer>
    </div>
  );
};
