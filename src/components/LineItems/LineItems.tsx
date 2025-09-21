import React, { FC } from 'react';
import styles from './LineItems.module.scss';

export interface ILineItemsProps {
  items: { id: number; title: string; text?: string }[];
  isDescription?: boolean;
}

const LineItems: FC<ILineItemsProps> = ({ items, isDescription = true }) => {
  return (
    <div className={styles.items_wrapper}>
      <div className={styles.titeles}>
        {items.map((item) => (
          <p className={styles.title} key={item.id}>
            <span>{item.title.charAt(0)}</span>
            {item.title.slice(1)}
          </p>
        ))}
        <div className={styles.cirlces}></div>
      </div>
      {isDescription && (
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.circle}></div>
              <p className={styles.text}>{item.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LineItems;
