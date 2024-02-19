import { useParams } from 'react-router-dom';
import { jsonParser } from '../../common';

import styles from './Test.module.scss';
import db from '../../data/quizzes.json';

const Test = () => {
  const { id } = useParams();
  const data = jsonParser(db);
  const { questions, results } = data[id];

  return (
    <div className={styles.test__wrapper}>
      <div className={styles.test}>
        <img
          src="https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className={styles.test__img}
        />
        <span className={styles.test__number}>1/15</span>
        <span className={styles.test__question}>Question: TROLOLO</span>
        <section className={styles.test__poll}>
          <button className={styles.test__variant}>Variant 1</button>
          <button className={styles.test__variant}>Variant 2</button>
          <button className={styles.test__variant}>Variant 3</button>
          <button className={styles.test__variant}>Variant 4</button>
        </section>
      </div>
    </div>
  );
};

export default Test;
