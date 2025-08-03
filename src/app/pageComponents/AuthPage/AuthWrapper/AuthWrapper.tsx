import React, { ReactNode } from 'react';
import styles from './AuthWrapper.module.scss';
import IconGoogle from '@/assets/img/Google__G__logo.svg';
import IconVk from '@/assets/img/VK_logo.svg';

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.AuthWrapper}>
      {children}
      <p className={styles.text}>Войти через социальные сети</p>
      <div className={styles.buttons}>
        <button className={styles.button}>
          <IconGoogle />
          Продолжить с Google
        </button>
        <button className={styles.button}>
          <IconVk />
          Продолжить с VK
        </button>
      </div>
    </div>
  );
};

export default AuthWrapper;
