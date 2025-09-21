import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { Textarea } from '@/components/ui/Textarea/Textarea';
import { StepTitle } from '../../StepTitle/StepTitle';

const validationRules = {
  required: 'Поле обязательно для заполнения',
};

export const FullStep2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <div>
      <StepTitle title='Сайты компаний конкурентов' style={{ marginBottom: 16, maxWidth: '50%' }} />

      <Controller
        name='step2_full'
        control={control}
        rules={validationRules}
        render={({ field }) => {
          return (
            <Textarea
              value={field.value}
              onChange={field.onChange}
              rows={11}
              placeholder='Поле для ввода текста'
              error={errors.step2_full?.message}
            />
          );
        }}
      />
    </div>
  );
};
