'use client';
import React, { FC } from 'react';
import styles from './Checkbox.module.scss';
import { Checkbox as CheckboxRadix } from 'radix-ui';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import IconChecked from '@/assets/img/icon_checked.svg?react';

type PartialCheckboxProps = Pick<
  CheckboxProps,
  | 'id'
  | 'onClick'
  | 'onChange'
  | 'checked'
  | 'defaultChecked'
  | 'disabled'
  | 'name'
  | 'value'
  | 'required'
  | 'onCheckedChange'
>;

interface ICheckbox extends PartialCheckboxProps {
  label: string;
  error?: unknown;
}

export const Checkbox: FC<ICheckbox> = ({
  id,
  onClick,
  onChange,
  checked,
  defaultChecked,
  disabled,
  name,
  value,
  required,
  onCheckedChange,
  error,
  label,
}) => {
  return (
    <label htmlFor={id} className={styles.wrapper}>
      <CheckboxRadix.Root
        className={styles.root}
        id={id}
        name={name}
        value={value}
        onClick={onClick}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxRadix.Indicator className={styles.icon}>
          <IconChecked />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <span className={clsx(styles.text, { [styles.error]: error })}>{label}</span>
    </label>
  );
};
