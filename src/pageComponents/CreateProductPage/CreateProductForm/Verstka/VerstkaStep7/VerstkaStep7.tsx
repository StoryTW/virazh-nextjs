import React from 'react';
import styles from './VerstkaStep7.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { IForm } from '../../CreateProductForm';
import { StepTitle } from '../../StepTitle/StepTitle';

export const VerstkaStep7 = () => {
  const { control } = useFormContext<IForm>();

  return (
    <div className={styles.root}>
      <StepTitle title={'Требуется ли дальнейшая поддержка сайта'} />

      <Controller
        name='step7_verstka'
        control={control}
        render={({ field }) => {
          const isChecked = !!field.value;

          return (
            <Checkbox
              label={'Хранение резервной копии сайта на нашем жестком диске'}
              checked={isChecked}
              onCheckedChange={field.onChange}
              withBg
            />
          );
        }}
      />
    </div>
  );
};
