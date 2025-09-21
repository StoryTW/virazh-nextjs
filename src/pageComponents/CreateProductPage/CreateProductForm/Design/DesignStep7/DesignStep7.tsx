import React, { useEffect } from 'react';
import styles from './DesignStep7.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Визитная карточка',
    value: 'resume',
  },
  {
    name: 'Корпоративный',
    value: 'corporate',
  },
  {
    name: 'Информационный портал',
    value: 'info',
  },
  {
    name: 'Интернет-магазин',
    value: 'e-commerce',
  },
  {
    name: 'Другой тип (описать)',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const DesignStep7 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step7_design) {
      toast.error(errors.step7_design.message);
    }
  }, [errors.step7_design]);

  return (
    <div className={styles.root}>
      <Controller
        name='step7_design'
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
