import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { StepTitle } from '../../StepTitle/StepTitle';
import { Textarea } from '@/components/ui/Textarea/Textarea';

const validationRules = {
  required: 'Поле обязательно для заполнения',
};

export const VerstkaStep1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <div>
      <StepTitle
        title='Под какую CMS  адаптировать верстку'
        style={{ marginBottom: 16, maxWidth: '50%' }}
      />

      <Controller
        name='step1_verstka'
        control={control}
        rules={validationRules}
        render={({ field }) => {
          return (
            <Textarea
              value={field.value}
              onChange={field.onChange}
              rows={11}
              placeholder='Поле для ввода текста'
              error={errors.step1_verstka?.message}
            />
          );
        }}
      />
    </div>
  );
};
