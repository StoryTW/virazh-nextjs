import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { StepTitle } from '../../StepTitle/StepTitle';
import { Textarea } from '@/components/ui/Textarea/Textarea';

const validationRules = {
  required: 'Поле обязательно для заполнения',
};

export const DesignStep4 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <div>
      <StepTitle
        title='Перечислите 3-6 сайтов, дизайн которых Вам нравится'
        style={{ marginBottom: 16, maxWidth: '50%' }}
      />

      <Controller
        name='step4_design'
        control={control}
        rules={validationRules}
        render={({ field }) => {
          return (
            <Textarea
              value={field.value}
              onChange={field.onChange}
              rows={11}
              placeholder='Поле для ввода текста'
              error={errors.step4_design?.message}
            />
          );
        }}
      />
    </div>
  );
};
