import React from 'react';
import styles from './EntryStep.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../CreateProductForm';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';

const items = [
  {
    name: 'Разработать сайт под ключ',
    value: 'full',
  },
  {
    name: 'Разработать макет сайта (дизайн)',
    value: 'design',
  },
  {
    name: 'Верстка готового макета',
    value: 'verstka',
  },
];

export const EntryStep = () => {
  const { control } = useFormContext<IForm>();

  return (
    <div className={styles.root}>
      <Controller
        name='entry_step'
        control={control}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
          />
        )}
      />
    </div>
  );
};
