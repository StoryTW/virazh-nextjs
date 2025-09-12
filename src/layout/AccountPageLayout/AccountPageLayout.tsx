import React, { PropsWithChildren } from 'react';
import styles from './AccountPageLayout.module.scss';
import { ClientCountBlock } from '@/components/ClientCountBlock/ClientCountBlock';

interface IAccountPageLayout extends PropsWithChildren {
  title: string;
}

export const AccountPageLayout = ({ children, title }: IAccountPageLayout) => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          <div className={styles.contentWrapper}>{children}</div>
        </div>
      </div>

      <ClientCountBlock />
    </div>
  );
};
