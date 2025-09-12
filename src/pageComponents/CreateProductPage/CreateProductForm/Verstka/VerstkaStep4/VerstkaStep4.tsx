import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { StepTitle } from '../../StepTitle/StepTitle';
import { Textarea } from '@/components/ui/Textarea/Textarea';

const validationRules = {
  required: 'Поле обязательно для заполнения',
};

export const VerstkaStep4 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <div>
      <StepTitle
        title='Перечислите модули, которые будут использоваться на сайте'
        style={{ marginBottom: 16, maxWidth: '50%' }}
      />

      <Controller
        name='step4_verstka'
        control={control}
        rules={validationRules}
        render={({ field }) => {
          return (
            <Textarea
              value={field.value}
              onChange={field.onChange}
              rows={11}
              placeholder={`Поле для ввода текста
              \nНапример, Информационная страница, Новостная лента, Обратная связь, Фотогалерея, Файловый архив, Каталог продукции, Регистрация пользователей, Поиск и т.п.`}
              error={errors.step4_verstka?.message}
            />
          );
        }}
      />
    </div>
  );
};
