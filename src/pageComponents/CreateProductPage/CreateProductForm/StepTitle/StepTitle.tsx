import React, { FC, HTMLAttributes } from 'react';
import styles from './StepTitle.module.scss';
import clsx from 'clsx';

interface IStepTitle extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const StepTitle: FC<IStepTitle> = ({ title, ...props }) => {
  return (
    <div className={clsx(styles.root, props.className)} {...props}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};
