import React from 'react';
import styles from './EntryStep.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { IForm } from '../CreateProductForm';

export const EntryStep = () => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext<IForm>();

  return (
    <div className={styles.root}>
      <Controller
        name='full_website'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Разработать сайт под ключ'
            checked={!!field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <Controller
        name='only_design'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Разработать макет сайта (дизайн)'
            checked={!!field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />

      <Controller
        name='only_verstka'
        control={control}
        render={({ field }) => (
          <Checkbox
            label='Верстка готового макета'
            checked={!!field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
    </div>
  );
};
