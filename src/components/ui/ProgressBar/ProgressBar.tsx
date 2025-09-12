import React, { FC } from 'react';
import styles from './ProgressBar.module.scss';
import { Progress } from 'radix-ui';
import { ProgressProps } from '@radix-ui/react-progress';

interface IProgressBar extends ProgressProps {}

export const ProgressBar: FC<IProgressBar> = ({ value, max = 10 }) => {
  return (
    <Progress.Root className={styles.root} value={value} max={max}>
      <Progress.Indicator
        className={styles.indicator}
        style={{ transform: `translateX(-${100 - Number(value) * 10}%)` }}
      />
    </Progress.Root>
  );
};
