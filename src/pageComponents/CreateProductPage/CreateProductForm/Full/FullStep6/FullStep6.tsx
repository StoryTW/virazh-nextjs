import React, { useEffect } from 'react';
import styles from './FullStep6.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Блочное',
    value: 'block',
  },
  {
    name: 'Хаотично',
    value: 'random',
  },
  {
    name: 'Структурировано',
    value: 'structure',
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

export const FullStep6 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step6_full) {
      toast.error(errors.step6_full.message);
    }
  }, [errors.step6_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step6_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Расположение элементов в дизайне'
          />
        )}
      />
    </div>
  );
};
