'use client';
import React, { useState } from 'react';
import styles from './Burger.module.scss';
import clsx from 'clsx';
import { Navbar } from './Navbar/Navbar';

export const Burger = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleToggle = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <>
      <button className={styles.btn} onClick={handleToggle}>
        <span
          className={clsx(styles.line, styles.top, {
            [styles.active]: openMenu,
          })}
        />

        <span
          className={clsx(styles.line, styles.middle, {
            [styles.active]: openMenu,
          })}
        />

        <span
          className={clsx(styles.line, styles.bottom, {
            [styles.active]: openMenu,
          })}
        />
      </button>

      <Navbar openMenu={openMenu} onClose={handleToggle} />
    </>
  );
};
