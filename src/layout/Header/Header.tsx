import React from 'react';
import styles from './Header.module.scss';
import { LogoBlock } from './LogoBlock/LogoBlock';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { AuthBlock } from './AuthBlock/AuthBlock';

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.wrapper}>
        <LogoBlock />

        <SearchBlock />

        <AuthBlock />
      </div>
    </header>
  );
};
