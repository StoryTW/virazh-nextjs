import React, { useEffect } from 'react';
import styles from './VerstkaStep2.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Резиновый тянется по ширине под все расширения, например широкоэкранные мониторы',
    value: 'yes',
  },
  {
    name: 'Фиксированный не растягивается, остается на месте',
    value: 'no',
  }
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const VerstkaStep2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step2_verstka) {
      toast.error(errors.step2_verstka.message);
    }
  }, [errors.step2_verstka]);

  return (
    <div className={styles.root}>
      <Controller
        name='step2_verstka'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Создавать резиновый или фиксированный шаблон?'
          />
        )}
      />
    </div>
  );
};
