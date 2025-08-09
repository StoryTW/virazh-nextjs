import React, { FC } from 'react';
import styles from './ResultBlock.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import Link from 'next/link';

interface IResultBlock {
  resultsData: any[];
  value: string;
}

export const ResultBlock: FC<IResultBlock> = ({ resultsData, value }) => {
  return (
    <AnimatePresence mode='wait'>
      {value && (
        <motion.div
          className={styles.root}
          variants={animateHelper('searchBlock')}
          initial='hide'
          animate='show'
          exit='hide'
        >
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {resultsData.length > 1 ? (
                <>
                  {resultsData.map((item, index) => {
                    return (
                      <li key={index} className={styles.item}>
                        <Link href={item.name}>
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </>
              ) : (
                <li className={styles.nothingFound}>
                  Ничего не найдено
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
