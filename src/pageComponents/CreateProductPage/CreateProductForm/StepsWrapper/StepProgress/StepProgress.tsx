import React, { FC } from 'react';
import styles from './StepProgress.module.scss';
import { ProgressBar } from '@/components/ui/ProgressBar/ProgressBar';

const STEPS = new Array(10).fill('');

interface IStepProgress {
  step: number;
}

export const StepProgress: FC<IStepProgress> = ({ step }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.stepsWrapper}>
          {STEPS.map((_item, index) => {
            return (
              <div key={index} className={styles.step}>
                Шаг {index + 1}
              </div>
            );
          })}
        </div>

        <ProgressBar value={step} />
      </div>
    </div>
  );
};
