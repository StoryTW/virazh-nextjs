import React, { useEffect } from 'react';
import styles from './VerstkaStep5.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';
import { toast } from 'sonner';

const items = [
  {
    name: 'PR-кампания',
    value: 'pr',
  },
  {
    name: 'Выставка',
    value: 'vistavka',
  },
  {
    name: 'Ежегодный отчет',
    value: 'otchet',
  },
  {
    name: 'Другое:',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const VerstkaStep5 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step5_verstka) {
      toast.error(errors.step5_verstka.message);
    }
  }, [errors.step5_verstka]);

  return (
    <div className={styles.root}>
      <Controller
        name='step5_verstka'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Желательный срок верстки макета (Существуют ли какие-либо внешние обстоятельства,которые могут влиять на сроки)'
          />
        )}
      />
    </div>
  );
};
