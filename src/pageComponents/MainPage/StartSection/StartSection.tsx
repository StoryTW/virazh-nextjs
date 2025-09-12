import Image from 'next/image';
import React from 'react';
import styles from './StartSection.module.scss';
import BackgroundCircles from '@/components/BackgroundCircles/BackgroundCircles';
import { ClientCountBlock } from '@/components/ClientCountBlock/ClientCountBlock';

const StartSection = () => {
  return (
    <div className={styles.StartSection}>
      <BackgroundCircles />
      <div className={styles.header}>
        <Image src='/assets/img/logo.svg' alt='' width={1038} height={378} />
        <h1 className={styles.title}>ПРОДВИЖЕНИЕ В СОЦИАЛЬНЫХ СЕТЯХ</h1>
      </div>
      <ClientCountBlock />
    </div>
  );
};

export default StartSection;
