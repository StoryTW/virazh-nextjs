import React, { FC } from 'react';
import IconArrow from '@/assets/img/icon_tg_btn.svg?react';
import styles from './ReviewButtons.module.scss';
import clsx from 'clsx';

interface IReviewButtons {
  handlePrev: () => void;
  handleNext: () => void;
  className?: string;
}

export const ReviewButtons: FC<IReviewButtons> = ({
  handlePrev,
  handleNext,
  className,
}) => {
  return (
    <>
      <button className={clsx(styles.btn, styles.prev, className)} onClick={handlePrev}>
        <IconArrow />
      </button>
      <button className={clsx(styles.btn, styles.next, className)} onClick={handleNext}>
        <IconArrow />
      </button>
    </>
  );
};