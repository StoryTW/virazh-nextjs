import React from 'react';
import styles from './ClientCountBlock.module.scss';
import Image from 'next/image';

const GIRL_1 = '/assets/img/clients-count/girl1.png';
const GIRL_2 = '/assets/img/clients-count/girl2.png';
const MAN_1 = '/assets/img/clients-count/man1.png';
const MAN_2 = '/assets/img/clients-count/man2.png';

export const ClientCountBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.imgWrapper}>
        <Image src={GIRL_1} alt='girl1' width={32} height={32} className={styles.girl1} />
        <Image src={MAN_1} alt='man1' width={32} height={32} className={styles.man1} />
        <Image src={GIRL_2} alt='girl2' width={32} height={32} className={styles.girl2} />
        <Image src={MAN_2} alt='man2' width={32} height={32} className={styles.man2} />
      </div>

      <div className={styles.countText}>
        <span>12 000+</span> довольных клиентов
      </div>
    </div>
  );
};
