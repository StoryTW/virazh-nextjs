import React, { useEffect } from 'react';
import styles from './FullStep7.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Деловой',
    value: 'delovoi',
  },
  {
    name: 'Гламурный',
    value: 'glamur',
  },
  {
    name: 'Дорогой',
    value: 'rich',
  },
  {
    name: 'Информативный',
    value: 'info',
  },
  {
    name: 'Стильный',
    value: 'style',
  },
  {
    name: 'Мультяшный',
    value: 'carton',
  },
  {
    name: 'На усмотрение дизайнера',
    value: 'designer',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const FullStep7 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step7_full) {
      toast.error(errors.step7_full.message);
    }
  }, [errors.step7_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step7_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Сайт по восприятию'
          />
        )}
      />
    </div>
  );
};
