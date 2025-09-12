import React, { useEffect } from 'react';
import styles from './FullStep4.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Отсутствует',
    value: 'no_menu',
  },
  {
    name: 'Обычное',
    value: 'usual',
  },
  {
    name: 'Выпадающее',
    value: 'dropdown',
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

export const FullStep4 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step4_full) {
      toast.error(errors.step4_full.message);
    }
  }, [errors.step4_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step4_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Вид подменю'
          />
        )}
      />
    </div>
  );
};
