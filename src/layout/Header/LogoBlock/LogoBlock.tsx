import React from 'react';
import styles from './LogoBlock.module.scss';
import { Burger } from '../Burger/Burger';
import Link from 'next/link';
import { ROUTER } from '@/utils/router';
import Image from 'next/image';

export const LogoBlock = () => {
  return (
    <div className={styles.root}>
      <Burger />

      <Link href={ROUTER.MAIN} className={styles.logo}>
        <Image src={'/assets/img/icon_logo.svg'} alt='logo' width={150} height={55} quality={100} />
      </Link>
    </div>
  );
};
