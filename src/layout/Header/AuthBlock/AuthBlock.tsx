import React from 'react';
import styles from './AuthBlock.module.scss';
import Link from 'next/link';
import IconProfile from '@/assets/img/icon_profile.svg?react';
import IconCart from '@/assets/img/icon_cart.svg?react';
import { ROUTER } from '@/utils/router';

export const AuthBlock = () => {
  return (
    <div className={styles.root}>
      <Link href={ROUTER.PROFILE} className={styles.link}>
        <IconProfile />
      </Link>

      <Link href={ROUTER.CART} className={styles.link}>
        <IconCart />
      </Link>
    </div>
  );
};
