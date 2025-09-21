import React, { useEffect } from 'react';
import styles from './FullStep1.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Сайт визитка',
    value: 'resume',
  },
  {
    name: 'Промо сайт',
    value: 'promo',
  },
  {
    name: 'Корпоративный сайт',
    value: 'corporate',
  },
  {
    name: 'Интернет магазин',
    value: 'e-commerce',
  },
  {
    name: 'Информационный сайт',
    value: 'info',
  },
  {
    name: 'Портал',
    value: 'portal',
  },
  {
    name: 'Каталог',
    value: 'catalog',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const FullStep1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step1_full) {
      toast.error(errors.step1_full.message);
    }
  }, [errors.step1_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step1_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Тип сайта'
          />
        )}
      />
    </div>
  );
};
