import React, { useEffect } from 'react';
import styles from './FullStep8.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Цвета фирменного стиля и сочетаемые с ними',
    value: 'firm',
  },
  {
    name: 'На усмотрение дизайнера',
    value: 'designer',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const FullStep8 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step8_full) {
      toast.error(errors.step8_full.message);
    }
  }, [errors.step8_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step8_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Цветовая гамма'
          />
        )}
      />
    </div>
  );
};
