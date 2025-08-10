'use client';

import React, { useState } from 'react';
import styles from './AuthPage.module.scss';
import AuthWrapper from './AuthWrapper/AuthWrapper';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import clsx from 'clsx';

const AuthPage = () => {
  const [currentAuth, setCurrentAuth] = useState(0);
  return (
    <div className={styles.AuthPage}>
      <AuthWrapper>
        <div className={styles.header}>
          <button
            onClick={() => setCurrentAuth(0)}
            className={clsx({ [styles.active]: currentAuth === 0 })}
          >
            Вход
          </button>
          <button
            onClick={() => setCurrentAuth(1)}
            className={clsx({ [styles.active]: currentAuth === 1 })}
          >
            Регистрация
          </button>
        </div>
        {currentAuth ? <SignUp /> : <SignIn />}
      </AuthWrapper>
    </div>
  );
};

export default AuthPage;
