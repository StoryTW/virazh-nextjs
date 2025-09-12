import React, { useEffect } from 'react';
import styles from './DesignStep9.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'Есть ( в RAR архиве нужно будет прислать)',
    value: 'yes',
  },
  {
    name: 'Нет (используются изображения из источников – интернет)',
    value: 'no',
  }
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const DesignStep9 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step9_design) {
      toast.error(errors.step9_design.message);
    }
  }, [errors.step9_design]);

  return (
    <div className={styles.root}>
      <Controller
        name='step9_design'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Наличие фотоматериалов для разработки визуальной концепции'
          />
        )}
      />
    </div>
  );
};
