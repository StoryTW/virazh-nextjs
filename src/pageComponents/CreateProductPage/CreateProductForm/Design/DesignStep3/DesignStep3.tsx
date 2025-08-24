import React from 'react';
import styles from './DesignStep3.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/Checkbox/Checkbox';
import { IForm } from '../../CreateProductForm';

type OptionsType = {
  label: string;
  value: 'sliders' | 'modals' | 'dropdowns';
};

const OPTIONS: OptionsType[] = [
  { label: 'Слайдеры', value: 'sliders' },
  { label: 'Выпадающие меню', value: 'dropdowns' },
  { label: 'Всплывающие окна', value: 'modals' },
];

export const DesignStep3 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  return (
    <div>
      {OPTIONS.map((checkbox) => {
        return (
          // <Controller
          //   key={checkbox.value}
          //   name='step3_full'
          //   control={control}
          //   rules={{
          //     validate: (value) => value.length > 0 || 'Выберите хотя бы один вариант',
          //   }}
          //   render={({ field }) => {
          //     const isChecked = field.value.includes(checkbox.value);

          //     const onChange = (checked: boolean | 'indeterminate') => {
          //       if (checked) {
          //         field.onChange([...field.value, checkbox.value]);
          //       } else {
          //         field.onChange(field.value.filter((v: string) => v !== checkbox.value));
          //       }
          //     };

          //     return (
          //       <Checkbox label={checkbox.label} checked={isChecked} onCheckedChange={onChange} />
          //     );
          //   }}
          // />
          <div key={checkbox.value}>
            step3 full
          </div>
        );
      })}
    </div>
  );
};
