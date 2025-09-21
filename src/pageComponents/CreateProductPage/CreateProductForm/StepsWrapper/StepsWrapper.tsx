'use client';
import React, { FC, PropsWithChildren } from 'react';
import styles from './StepsWrapper.module.scss';
import { StepProgress } from './StepProgress/StepProgress';
import { StepFooter } from './StepFooter/StepFooter';
import { IForm } from '../CreateProductForm';
import { useFormContext } from 'react-hook-form';

interface IStepsWrapper extends PropsWithChildren {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

export const StepsWrapper: FC<IStepsWrapper> = ({ children, nextStep, prevStep, step }) => {
  const { watch } = useFormContext<IForm>();

  const entryStep = watch('entry_step');

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        {step === 0 ? (
          <div className={styles.entryTitle}>Что вы желаете?</div>
        ) : (
          <StepProgress step={step} />
        )}

        <div className={styles.content}>
          {children}
        </div>

        <StepFooter nextStep={nextStep} prevStep={prevStep} step={step} />
      </div>
    </div>
  );
};
