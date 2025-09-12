'use client';
import React, { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { EntryStep } from './EntryStep/EntryStep';
import { FullStep1 } from './Full/FullStep1/FullStep1';
import { StepsWrapper } from './StepsWrapper/StepsWrapper';
import { FullStep2 } from './Full/FullStep2/FullStep2';
import { FullStep3 } from './Full/FullStep3/FullStep3';
import { FullStep4 } from './Full/FullStep4/FullStep4';
import { FullStep5 } from './Full/FullStep5/FullStep5';
import { FullStep6 } from './Full/FullStep6/FullStep6';
import { FullStep7 } from './Full/FullStep7/FullStep7';
import { FullStep8 } from './Full/FullStep8/FullStep8';
import { FullStep9 } from './Full/FullStep9/FullStep9';
import { DesignStep1 } from './Design/DesignStep1/DesignStep1';
import { DesignStep2 } from './Design/DesignStep2/DesignStep2';
import { DesignStep3 } from './Design/DesignStep3/DesignStep3';
import { DesignStep4 } from './Design/DesignStep4/DesignStep4';
import { DesignStep5 } from './Design/DesignStep5/DesignStep5';
import { DesignStep6 } from './Design/DesignStep6/DesignStep6';
import { DesignStep7 } from './Design/DesignStep7/DesignStep7';
import { DesignStep8 } from './Design/DesignStep8/DesignStep8';
import { DesignStep9 } from './Design/DesignStep9/DesignStep9';
import { VerstkaStep1 } from './Verstka/VerstkaStep1/VerstkaStep1';
import { VerstkaStep2 } from './Verstka/VerstkaStep2/VerstkaStep2';
import { VerstkaStep3 } from './Verstka/VerstkaStep3/VerstkaStep3';
import { VerstkaStep4 } from './Verstka/VerstkaStep4/VerstkaStep4';
import { VerstkaStep5 } from './Verstka/VerstkaStep5/VerstkaStep5';
import { VerstkaStep6 } from './Verstka/VerstkaStep6/VerstkaStep6';
import { VerstkaStep7 } from './Verstka/VerstkaStep7/VerstkaStep7';

export interface IForm {
  entry_step: 'full' | 'design' | 'verstka';

  //full
  step1_full?: 'resume' | 'promo' | 'corporate' | 'e-commerce' | 'info' | 'portal' | 'catalog';
  step2_full?: string;
  step3_full?: 'horizontal' | 'vertical' | 'combo' | 'designer' | 'custom';
  step4_full?: 'no_menu' | 'usual' | 'dropdown' | 'designer' | 'custom';
  step5_full?: 'beatiful_design' | 'information' | 'minimalism' | 'designer' | 'custom';
  step6_full?: 'block' | 'random' | 'structure' | 'designer' | 'custom';
  step7_full?: 'delovoi' | 'glamur' | 'rich' | 'info' | 'style' | 'carton' | 'designer';
  step8_full?: 'firm' | 'designer';
  step9_full?: 'center' | 'wide' | 'designer' | 'adaptiv';

  //design
  step1_design?: 'logo' | 'colors' | 'designer' | 'custom';
  step2_design?: 'graphic' | 'info' | 'graphic_and_info' | 'custom';
  step3_design?: ('corporate' | 'strict' | 'aggresion' | 'young' | 'avangard' | 'soft' | 'warm')[];
  step4_design?: string;
  step5_design?: 'cold' | 'warm' | 'common_colors' | 'custom';
  step6_design?: 'smooth' | 'sharped' | 'rectangular' | 'custom';
  step7_design?: 'resume' | 'corporate' | 'info' | 'e-commerce' | 'custom';
  step8_design?: string;
  step9_design?: 'yes' | 'no';

  //verstka
  step1_verstka?: string;
  step2_verstka?: 'yes' | 'no';
  step3_verstka?: ('sliders' | 'modals' | 'dropdowns')[];
  step4_verstka?: string;
  step5_verstka?: 'pr' | 'vistavka' | 'otchet' | 'custom';
  step6_verstka?: string;
  step7_verstka?: boolean;
}

export const STEPS_DATA = {
  full: [
    <FullStep1 />,
    <FullStep2 />,
    <FullStep3 />,
    <FullStep4 />,
    <FullStep5 />,
    <FullStep6 />,
    <FullStep7 />,
    <FullStep8 />,
    <FullStep9 />,
  ],
  design: [
    <DesignStep1 />,
    <DesignStep2 />,
    <DesignStep3 />,
    <DesignStep4 />,
    <DesignStep5 />,
    <DesignStep6 />,
    <DesignStep7 />,
    <DesignStep8 />,
    <DesignStep9 />,
  ],
  verstka: [
    <VerstkaStep1 />,
    <VerstkaStep2 />,
    <VerstkaStep3 />,
    <VerstkaStep4 />,
    <VerstkaStep5 />,
    <VerstkaStep6 />,
    <VerstkaStep7 />,
  ],
};

export const CreateProductForm = () => {
  const methods = useForm<IForm>({
    mode: 'onChange',
    defaultValues: {
      entry_step: 'full',
    },
  });

  const [step, setStep] = useState<number>(0);
  const [isEntryStepCompleted, setIsEntryStepCompleted] = useState<boolean>(false);

  const nextStep = async () => {
    if (step === 0) {
      const isValid = await methods.trigger('entry_step');

      if (isValid) {
        setIsEntryStepCompleted(true);
        setStep(1);
      }
    } else {
      const isValid = await methods.trigger();

      if (isValid) {
        setStep((s) => s + 1);
      }
    }
  };

  const prevStep = () => {
    if (step === 1) {
      setIsEntryStepCompleted(false);
      setStep(0);
    } else {
      setStep((s) => s - 1);
    }
  };

  const entryStep = methods.watch('entry_step');

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log('Все данные формы:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <StepsWrapper nextStep={nextStep} prevStep={prevStep} step={step}>
          <>
            {!isEntryStepCompleted && <EntryStep />}

            {isEntryStepCompleted && <>{STEPS_DATA[entryStep][step - 1]}</>}
          </>
        </StepsWrapper>
      </form>
    </FormProvider>
  );
};
