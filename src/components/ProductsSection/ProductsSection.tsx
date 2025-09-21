import React, { FC } from 'react';
import styles from './ProductsSection.module.scss';
import Image from 'next/image';
import IconProfile from '@/assets/img/icon_profile.svg';

interface IProductsSectionProps {
  items: {
    id: number;
    title: string;
    category: string;
    price: string;
    peoples?: string;
    subtitle?: string;
    img: string;
  }[];
  buttonText?: string;
}

const ProductsSection: FC<IProductsSectionProps> = ({ items, buttonText = 'Купить' }) => {
  return (
    <div className={styles.productsSection}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.border}></div>
          <Image src={item.img} alt='' width={352} height={235} className={styles.img} />
          <p className={styles.titie}>{item.title}</p>
          {item.peoples && (
            <div>
              <p className={styles.category}>{item.category}</p>
            </div>
          )}
          {item.subtitle ? (
            <p className={styles.category}>{item.subtitle}</p>
          ) : (
            <div className={styles.footer}>
              <div className={styles.left}>
                {item.peoples ? (
                  <>
                    <IconProfile />
                    <p>
                      <span>{item.peoples}</span> Подписчиков
                    </p>
                  </>
                ) : (
                  <p className={styles.category}>{item.category}</p>
                )}
              </div>
              <p className={styles.price}>
                <span>{item.price}</span> Руб
              </p>
            </div>
          )}

          <button className={styles.button}>{buttonText}</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
