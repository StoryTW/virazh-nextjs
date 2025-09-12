'use client';
import React from 'react';
import styles from './CartPage.module.scss';
import Link from 'next/link';
import { ROUTER } from '@/utils/router';
import Image from 'next/image';

export const CartPage = () => {
  return (
    <>
      <div className={styles.block}>
        <div className={styles.guestText}>Гость</div>

        <Link href={ROUTER.AUTH} className={styles.authLink}>
          <Image
            src={'assets/img/icon_auth.svg'}
            width={32}
            height={41}
            alt='icon_auth'
          />
          <div>Войти в личный кабинет</div>
        </Link>
      </div>
      <div className={styles.cart}>right</div>
    </>
  );
};
