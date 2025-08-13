'use client';
import React, { useState } from 'react';
import styles from './CreateProductForm.module.scss';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { EntryStep } from './EntryStep/EntryStep';
import { Step1 } from './Step1/Step1';
import { Step2 } from './Step2/Step2';
import { Step3 } from './Step3/Step3';
import { Step4 } from './Step4/Step4';
import { Step5 } from './Step5/Step5';
import { Step6 } from './Step6/Step6';
import { Step7 } from './Step7/Step7';
import { Step8 } from './Step8/Step8';
import { Step9 } from './Step9/Step9';
import { Step10 } from './Step10/Step10';
import { FinalStep } from './FinalStep/FinalStep';

export interface IForm {
  full_website: boolean;
  only_design: boolean;
  only_verstka: boolean;
}

export const CreateProductForm = () => {
  const methods = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      //Entry Step
      full_website: true, //Разработать сайт под ключ
      only_design: false, //Разработать макет сайта (дизайн)
      only_verstka: false, //Верстка готового макета
    },
  });

  const [step, setStep] = useState(0);

  const steps = [
    <EntryStep />,
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
    <Step7 />,
    <Step8 />,
    <Step9 />,
    <Step10 />,
    <FinalStep />,
  ];

  const nextStep = async () => {
    const isValid = await methods.trigger();

    if (isValid) setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log('Все данные формы:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {steps[step]}

        <div style={{ marginTop: 20 }}>
          {step > 0 && (
            <button type='button' onClick={prevStep} style={{color: '#fff'}}>
              Назад
            </button>
          )}
          {step < steps.length - 1 && (
            <button type='button' onClick={nextStep} style={{color: '#fff'}}> 
              Далее
            </button>
          )}
          {step === steps.length - 1 && <button type='submit'>Отправить</button>}
        </div>
      </form>
    </FormProvider>
  );
};
