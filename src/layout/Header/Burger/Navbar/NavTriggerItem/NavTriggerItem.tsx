import React, { FC } from 'react';
import styles from './NavTriggerItem.module.scss';
import Link from 'next/link';

interface INavTriggerItem {
  name: string;
  href: string;
}

export const NavTriggerItem: FC<INavTriggerItem> = ({ name, href }) => {
  return (
    <Link href={href} className={styles.root}>
      {name}
    </Link>
  );
};
