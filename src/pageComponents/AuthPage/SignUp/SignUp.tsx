import { InputBase } from '@/components/ui/input/input';
import React from 'react';
import styles from './SignUp.module.scss';
import Link from 'next/link';

const SignUp = () => {
  return (
    <form className={styles.form}>
      <InputBase type='text' placeholder='Имя' />
      <InputBase type='text' placeholder='Телефон, email' />
      <InputBase type='text' placeholder='Пароль' />
      <button className={styles.button}>Зарегистрироваться</button>
    </form>
  );
};

export default SignUp;
