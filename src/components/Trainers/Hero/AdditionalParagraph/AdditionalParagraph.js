import React from 'react';
import styles from './AdditionalParagraph.module.css';


const AdditionalParagraph = () => {
  return (
    <p className={styles.subheadline}>
      We’re redefining fitness - <span className={styles.bold}>and you can help!</span> We’re searching for trainers, athletes and coaches with all types of training backgrounds, specialisms, and experiences. Whether you’re a strength trainer, a sports athlete, or a nutritionist, <span className={styles.bold}>you can help us shape the future of fitness!</span>
    </p>
  );
};

export default AdditionalParagraph;