import React, { useEffect } from 'react';
import styles from './FullStep9.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'По центру (фиксированный)',
    value: 'center',
  },
  {
    name: 'Резиновый (растягиваемый на всю ширину экрана)',
    value: 'wide',
  },
  {
    name: 'На усмотрение дизайнера',
    value: 'designer',
  },
  {
    name: 'Адаптивная верстка (под мобильные устройства)',
    value: 'adaptiv',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const FullStep9 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step9_full) {
      toast.error(errors.step9_full.message);
    }
  }, [errors.step9_full]);

  return (
    <div className={styles.root}>
      <Controller
        name='step9_full'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Позиционирование и масштабирование'
          />
        )}
      />
    </div>
  );
};
