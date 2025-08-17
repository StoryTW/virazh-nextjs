import React, { FC } from 'react';
import styles from './LineItems.module.scss';

export interface ILineItemsProps {
  items: { id: number; title: string; text: string }[];
}

const LineItems: FC<ILineItemsProps> = ({ items }) => {
  return (
    <div className={styles.items_wrapper}>
      <div className={styles.items}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            <p className={styles.title}>
              <span>{item.title.charAt(0)}</span>
              {item.title.slice(1)}
            </p>
            <div className={styles.circle}></div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.cirlces}></div>
    </div>
  );
};

export default LineItems;
