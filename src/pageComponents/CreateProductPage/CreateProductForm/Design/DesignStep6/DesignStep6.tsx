import React, { useEffect } from 'react';
import styles from './DesignStep6.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Мягкие плавные',
    value: 'smooth',
  },
  {
    name: 'Острые агрессивные',
    value: 'sharped',
  },
  {
    name: 'Прямоугольные технологичные',
    value: 'rectangular',
  },
  {
    name: 'Смешанные (какие?)',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const DesignStep6 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step6_design) {
      toast.error(errors.step6_design.message);
    }
  }, [errors.step6_design]);

  return (
    <div className={styles.root}>
      <Controller
        name='step6_design'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Форма составляющих композиционных элементов дизайна:'
          />
        )}
      />
    </div>
  );
};
