import React, { useEffect } from 'react';
import styles from './FullStep5.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Дизайн',
    value: 'beatiful_design',
  },
  {
    name: 'Подача информации',
    value: 'information',
  },
  {
    name: 'Удобство пользования',
    value: 'minimalism',
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

export const FullStep5 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step5_full) {
      toast.error(errors.step5_full.message);
    }
  }, [errors.step5_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step5_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Акцент на сайте'
          />
        )}
      />
    </div>
  );
};
