'use client';

import React from 'react';
import styles from './ThreeSection.module.scss';
import Image from 'next/image';
import { motion } from 'motion/react';

const ThreeSection = () => {
  return (
    <div className={styles.ThreeSection}>
      <h1>Топ наших продуктов в 2025 году</h1>
      <div className={styles.items}>
        <div className={styles.itemWrapper}>
          <motion.div
            whileInView={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            viewport={{ amount: 0.8 }}
            transition={{ duration: 1, delay: 1 }}
            className={styles.item}
          >
            <motion.div
              whileInView={{ x: 0 }}
              initial={{ x: 100 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ amount: 0.8 }}
              className={styles.text}
            >
              <p>SMM продвижение</p>
              <p>Привлечение аудитории в социальных сетях</p>
              <p>Продажа готовых аккаунтов с подписчиками, групп, пабликов, подписчики поштучно</p>
            </motion.div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.img}
          >
            <Image src='/assets/img/main/item1.png' alt='' width={804} height={536} />
          </motion.div>
        </div>
        <div className={styles.itemWrapper}>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.img2}
          >
            <Image src='/assets/img/main/item2.png' alt='' width={804} height={536} />
          </motion.div>
          <motion.div
            whileInView={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ amount: 0.8 }}
            className={styles.item}
          >
            <motion.div
              whileInView={{ x: 0 }}
              initial={{ x: 100 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ amount: 0.8 }}
              className={styles.text2}
            >
              <p>Разработка сайтов</p>
              <p>Дизайн сайтов</p>
              <p>Верстка сайтов</p>
            </motion.div>
          </motion.div>
        </div>
        <div className={styles.itemWrapper}>
          <motion.div
            whileInView={{ scaleX: 1 }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ amount: 0.8 }}
            className={styles.item}
          >
            <motion.div
              whileInView={{ x: 0 }}
              initial={{ x: 100 }}
              viewport={{ amount: 0.8 }}
              transition={{ duration: 1, delay: 2 }}
              className={styles.text}
            >
              <p>SEO продвижение сайтов</p>
            </motion.div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.img}
          >
            <Image
              src='/assets/img/main/item3.png'
              alt=''
              width={804}
              height={536}
              className={styles.img}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSection;
