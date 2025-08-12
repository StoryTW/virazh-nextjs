'use client';
import React, { FC, ReactNode, useState } from 'react';
import styles from './FaqItem.module.scss';
import clsx from 'clsx';
import { motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import IconChevron from '@/assets/img/icon_chevron_down.svg?react';

interface IFaqItem {
  question: string;
  answer: ReactNode;
}

export const FaqItem: FC<IFaqItem> = ({ answer, question }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div
      className={clsx(styles.root, {
        [styles.active]: isActive,
      })}
      onClick={toggle}
    >
      <div className={styles.question}>
        <h3 className={styles.questionText}>{question}</h3>
        <div
          className={clsx(styles.icon, {
            [styles.active]: isActive,
          })}
        >
          <IconChevron />
        </div>
      </div>
      <motion.div
        variants={animateHelper('faqDropdown')}
        initial='hide'
        exit='hide'
        animate={isActive ? 'show' : 'hide'}
        transition={{
          duration: 0.8,
          ease: [0.04, 0.62, 0.23, 0.98],
        }}
      >
        <div className={styles.answerText}>{answer}</div>
      </motion.div>
    </div>
  );
};
