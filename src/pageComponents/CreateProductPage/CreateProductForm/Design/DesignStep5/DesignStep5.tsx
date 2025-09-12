import React, { useEffect } from 'react';
import styles from './DesignStep5.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Холодные',
    value: 'cold',
  },
  {
    name: 'Теплые',
    value: 'warm',
  },
  {
    name: 'Общая цветовая гамма',
    value: 'common_colors',
  },
  {
    name: 'Указанные непосредственно',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const DesignStep5 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step5_design) {
      toast.error(errors.step5_design.message);
    }
  }, [errors.step5_design]);

  return (
    <div className={styles.root}>
      <Controller
        name='step5_design'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Используемые цвета'
          />
        )}
      />
    </div>
  );
};
