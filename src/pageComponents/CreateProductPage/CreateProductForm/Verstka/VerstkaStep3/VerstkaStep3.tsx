import React, { useEffect } from 'react';
import styles from './VerstkaStep3.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { IForm } from '../../CreateProductForm';
import { toast } from 'sonner';
import { StepTitle } from '../../StepTitle/StepTitle';

type OptionsType = {
  label: string;
  value: 'sliders' | 'modals' | 'dropdowns';
};

const OPTIONS: OptionsType[] = [
  { label: 'Слайдеры', value: 'sliders' },
  { label: 'Выпадающие меню', value: 'modals' },
  { label: 'Всплывающие окна', value: 'dropdowns' }
];

export const VerstkaStep3 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step3_verstka) {
      toast.error(errors.step3_verstka.message);
    }
  }, [errors.step3_verstka]);

  return (
    <div className={styles.root}>
      <StepTitle title={'Особенности сайта или разделов сайта, на которые следует обратить внимание'} />

      {OPTIONS.map((checkbox) => {
        return (
          <Controller
            key={checkbox.value}
            name='step3_verstka'
            control={control}
            defaultValue={[]}
            rules={{
              validate: (value) => (value && value.length > 0) || 'Выберите хотя бы один вариант',
            }}
            render={({ field }) => {
              const isChecked = (field.value ?? []).includes(checkbox.value);

              const onChange = (checked: boolean | 'indeterminate') => {
                const currentValue = field.value ?? [];

                if (checked) {
                  field.onChange([...currentValue, checkbox.value]);
                } else {
                  field.onChange(currentValue.filter((v: string) => v !== checkbox.value));
                }
              };

              return (
                <Checkbox
                  label={checkbox.label}
                  checked={isChecked}
                  onCheckedChange={onChange}
                  withBg
                />
              );
            }}
          />
        );
      })}
    </div>
  );
};
