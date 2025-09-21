import React, { useEffect } from 'react';
import styles from './FullStep3.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Горизонтальное',
    value: 'horizontal',
  },
  {
    name: 'Вертикальное',
    value: 'vertical',
  },
  {
    name: 'Комбинированное',
    value: 'combo',
  },
  {
    name: 'На усмотрение дизайнера',
    value: 'designer',
  },
  {
    name: 'Ваш вариант',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const FullStep3 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step3_full) {
      toast.error(errors.step3_full.message);
    }
  }, [errors.step3_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step3_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Вид меню'
          />
        )}
      />
    </div>
  );
};