import React, { FC, InputHTMLAttributes } from 'react';
import styles from './SearchInput.module.scss';
import IconSearch from '@/assets/img/icon_search.svg?react';

export const SearchInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  onChange,
  placeholder,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <IconSearch />
      </div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        {...props}
      />
    </div>
  );
};
