import { InputBase } from '@/components/ui/input/input';
import React from 'react';
import styles from './SignIn.module.scss';
import Link from 'next/link';

const SignIn = () => {
  return (
    <form className={styles.form}>
      <InputBase type='text' placeholder='Телефон, email' />
      <InputBase type='text' placeholder='Пароль' />
      <div className={styles.block}>
        <label htmlFor='checkbox' className={styles.label}>
          <input type='checkbox' />
          <p id='checkbox'>Запомнить</p>
        </label>
        <Link href={'/'} className={styles.link}>
          Изменить пароль
        </Link>
      </div>
      <button className={styles.button}>Войти</button>
    </form>
  );
};

export default SignIn;
