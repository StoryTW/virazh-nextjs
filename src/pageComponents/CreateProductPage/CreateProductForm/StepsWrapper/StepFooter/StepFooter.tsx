import React, { FC } from 'react';
import styles from './StepFooter.module.scss';
import IconTime from '@/assets/img/icon_time.svg?react';
import IconQuestion from '@/assets/img/icon_question.svg?react';
import IconArrowDiagonal from '@/assets/img/icon_arrow_diagonal.svg?react';
import IconArrowLeft from '@/assets/img/icon_arrow_left.svg?react';

interface IStepFooter {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

export const StepFooter: FC<IStepFooter> = ({ nextStep, prevStep, step }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.leftBlock}>
          {step > 0 && (
            <button className={styles.btnBack} type='button' tabIndex={-1} onClick={prevStep}>
              <IconArrowLeft />
              шаг назад
            </button>
          )}
        </div>

        <div className={styles.middleBlock}>
          <div className={styles.info}>
            <IconQuestion />
            10 вопросов
          </div>

          <div className={styles.info}>
            <IconTime />5 минут времени
          </div>
        </div>

        <div className={styles.rightBlock}>
          {/* {step < steps.length - 1 && } */}
          <button className={styles.btnNext} type='button' onClick={nextStep}>
            следующий шаг <IconArrowDiagonal />
          </button>
        </div>
      </div>
    </div>
  );
};
