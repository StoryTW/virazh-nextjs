import React, { FC } from 'react';
import LineItems, { ILineItemsProps } from '../LineItems/LineItems';
import BackgroundCircles from '../BackgroundCircles/BackgroundCircles';
import { ClientCountBlock } from '../ClientCountBlock/ClientCountBlock';
import styles from './StartSectionPages.module.scss';

interface IStartSectionPagesProps extends ILineItemsProps {
  title: string;
  subtitle?: string;
}

const StartSectionPages: FC<IStartSectionPagesProps> = ({ title, subtitle, items }) => {
  return (
    <div className={styles.startSectionPages}>
      <div className={styles.inner}>
        <BackgroundCircles />
        <h1 className={styles.h1}>{title}</h1>
        <h1 className={styles.h1}>{subtitle}</h1>
        <LineItems items={items} />
        <div className={styles.footer}>
          <ClientCountBlock />
        </div>
      </div>
    </div>
  );
};

export default StartSectionPages;
