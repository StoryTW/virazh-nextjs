import React, { useEffect } from 'react';
import styles from './DesignStep3.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { IForm } from '../../CreateProductForm';
import { toast } from 'sonner';
import { StepTitle } from '../../StepTitle/StepTitle';

type OptionsType = {
  label: string;
  value: 'corporate' | 'strict' | 'aggresion' | 'young' | 'avangard' | 'soft' | 'warm';
};

const OPTIONS: OptionsType[] = [
  { label: 'Корпоративный', value: 'corporate' },
  { label: 'Строгий', value: 'strict' },
  { label: 'Агрессивный', value: 'aggresion' },
  { label: 'Молодежный', value: 'young' },
  { label: 'Авангардный', value: 'avangard' },
  { label: 'Мягкий', value: 'soft' },
  { label: 'Теплый', value: 'warm' },
];

export const DesignStep3 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step3_design) {
      toast.error(errors.step3_design.message);
    }
  }, [errors.step3_design]);

  return (
    <div className={styles.root}>
      <StepTitle title={'Слова, характеризующие стилистику вашего сайта'} />

      {OPTIONS.map((checkbox) => {
        return (
          <Controller
            key={checkbox.value}
            name='step3_design'
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
