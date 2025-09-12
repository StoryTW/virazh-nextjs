import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { StepTitle } from '../../StepTitle/StepTitle';
import { Textarea } from '@/components/ui/Textarea/Textarea';

const validationRules = {
  required: 'Поле обязательно для заполнения',
};

export const VerstkaStep6 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <div>
      <StepTitle title='Дополнительная информация' style={{ marginBottom: 16, maxWidth: '50%' }} />

      <Controller
        name='step6_verstka'
        control={control}
        rules={validationRules}
        render={({ field }) => {
          return (
            <Textarea
              value={field.value}
              onChange={field.onChange}
              rows={11}
              placeholder={`Поле для ввода текста
              \nПеречислите всю дополнительную информацию, которая ещё не была отражена в Брифе и может повлиять на сложность и стоимость разработки`}
              error={errors.step6_verstka?.message}
            />
          );
        }}
      />
    </div>
  );
};
