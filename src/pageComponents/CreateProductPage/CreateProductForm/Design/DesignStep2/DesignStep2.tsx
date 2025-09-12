import React, { useEffect } from 'react';
import styles from './DesignStep2.module.scss';
import { Controller, useFormContext } from 'react-hook-form';
import { IForm } from '../../CreateProductForm';
import { toast } from 'sonner';
import { RadioGroup } from '@/components/ui/RadioGroup/RadioGroup';

const items = [
  {
    name: 'Имиджевый: Главное внимание уделяется графической части сайта',
    value: 'graphic',
  },
  {
    name: 'Информационный: Минимум графики, максимум текста',
    value: 'info',
  },
  {
    name: 'Смесь имиджевого и информационного',
    value: 'graphic_and_info',
  },
  {
    name: 'Другой тип дизайна',
    value: 'custom',
  },
];

const validationRules = {
  required: 'Выберите хотя бы один вариант',
};

export const DesignStep2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IForm>();

  useEffect(() => {
    if (errors.step2_design) {
      toast.error(errors.step2_design.message);
    }
  }, [errors.step2_design]);

  return (
    <div className={styles.root}>
      <Controller
        name='step2_design'
        control={control}
        rules={validationRules}
        render={({ field }) => (
          <RadioGroup
            items={items}
            value={field.value}
            onValueChange={field.onChange}
            rootClassname={styles.radioWrapper}
            titleName='Тип дизайна сайта'
          />
        )}
      />
    </div>
  );
};
