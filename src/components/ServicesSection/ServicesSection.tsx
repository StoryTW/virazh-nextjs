import React, { FC } from 'react';
import styles from './ServicesSection.module.scss';

interface IServiceItem {
  text: string;
  title: string;
  subtitle: string;
  price?: string;
}

interface IServicesSectionProps {
  items: IServiceItem[];
}

const ServicesSection: FC<IServicesSectionProps> = ({ items }) => {
  return (
    <div className={styles.ServicesSection}>
      {items.map((item, i) => (
        <div className={styles.item} key={i}>
          <div className={styles.itemBorder}></div>
          <p className={styles.text}>{item.text}</p>
          <div className={styles.right}>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.subtitle}>{item.subtitle}</p>
            {item.price && (
              <p className={styles.price}>
                От <span>{item.price}</span> Руб
              </p>
            )}
            <button className={styles.button}>Заказать</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
