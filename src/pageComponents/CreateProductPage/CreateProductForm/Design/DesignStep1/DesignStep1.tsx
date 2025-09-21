import React, { useEffect } from 'react';
import styles from './DesignStep1.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Логотип/товарный знак',
    value: 'logo',
  },
  {
    name: 'Фирменные цвета и шрифты',
    value: 'colors',
  },
    {
    name: 'На усмотрение дизайнера',
    value: 'designer',
  },
  {
    name: 'Другое',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const DesignStep1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step1_design) {
      toast.error(errors.step1_design.message);
    }
  }, [errors.step1_design]);

  return (
    <div className={styles.root}>
      <Controller
        name='step1_design'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Фирменный стиль'
          />
        )}
      />
    </div>
  );
};
