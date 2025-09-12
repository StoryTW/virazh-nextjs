import { FC } from 'react';
import styles from './RadioGroup.module.scss';
import { RadioGroup as RadioGroupRadix } from 'radix-ui';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import clsx from 'clsx';
import { StepTitle } from '@/pageComponents/CreateProductPage/CreateProductForm/StepTitle/StepTitle';
import { Textarea } from '../Textarea/Textarea';

type PartialRadioGroupType = Pick<
  RadioGroupProps,
  'value' | 'defaultValue' | 'name' | 'onValueChange' | 'disabled'
>;

export interface IRadioGroup extends PartialRadioGroupType {
  items: IOption[];
  rootClassname?: string;
  titleName?: string;
}

export const RadioGroup: FC<IRadioGroup> = ({
  value,
  defaultValue,
  name,
  onValueChange,
  items,
  disabled,
  rootClassname,
  titleName,
}) => {
  const firstThreeItems = items.slice(0, 3);
  const remainingItems = items.slice(3);

  return (
    <RadioGroupRadix.Root
      className={clsx(styles.root, rootClassname)}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      name={name}
      value={value}
      disabled={disabled}
    >
      <div className={styles.column1}>
        {titleName && <StepTitle title={titleName} />}

        {firstThreeItems.map((radio) => {
          return (
            <label className={styles.radio} htmlFor={radio.value} key={radio?.value}>
              <RadioGroupRadix.Item className={styles.item} value={radio?.value} id={radio.value}>
                <RadioGroupRadix.Indicator className={styles.icon} />
              </RadioGroupRadix.Item>
              <div className={styles.label}>{radio?.name}</div>
            </label>
          );
        })}
      </div>

      <div className={styles.column2}>
        {remainingItems?.map((radio) => {
          if (radio.value === 'custom') {
            return (
              <div key={radio?.value}>
                <label className={styles.radio} htmlFor={radio.value}>
                  <RadioGroupRadix.Item
                    className={styles.item}
                    value={radio?.value}
                    id={radio.value}
                  >
                    <RadioGroupRadix.Indicator className={styles.icon} />
                  </RadioGroupRadix.Item>
                  <div className={styles.label}>{radio?.name}</div>
                </label>

                <Textarea
                  name='custom_value'
                  disabled={value !== 'custom'}
                  style={{ marginTop: 16 }}
                  placeholder='Поле для ввода текста'
                  rows={5}
                />
              </div>
            );
          }

          return (
            <label className={styles.radio} htmlFor={radio.value} key={radio?.value}>
              <RadioGroupRadix.Item className={styles.item} value={radio?.value} id={radio.value}>
                <RadioGroupRadix.Indicator className={styles.icon} />
              </RadioGroupRadix.Item>
              <div className={styles.label}>{radio?.name}</div>
            </label>
          );
        })}
      </div>
    </RadioGroupRadix.Root>
  );
};
