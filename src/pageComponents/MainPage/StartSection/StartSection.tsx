import Image from 'next/image';
import React from 'react';
import styles from './StartSection.module.scss';
import BackgroundCircles from '@/components/BackgroundCircles/BackgroundCircles';

const StartSection = () => {
  return (
    <div className={styles.StartSection}>
      <BackgroundCircles />
      <div className={styles.header}>
        <Image src='/assets/img/logo.svg' alt='' width={1038} height={378} />
        <h1 className={styles.title}>ПРОДВИЖЕНИЕ В СОЦИАЛЬНЫХ СЕТЯХ</h1>
      </div>
      <div className={styles.footer}>
        <Image src='/assets/img/icons-people.svg' alt='' width={155} height={88} />
        <div className={styles.texts}>
          <p className={styles.number}>12 000+</p>
          <p className={styles.text}>довольных клиентов</p>
        </div>
      </div>
    </div>
  );
};

export default StartSection;
