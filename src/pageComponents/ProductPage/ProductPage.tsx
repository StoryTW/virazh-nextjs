import React from 'react';
import styles from './ProductPage.module.scss';
import Image from 'next/image';
import BackgroundCircles from '@/components/BackgroundCircles/BackgroundCircles';
import LineItems from '@/components/LineItems/LineItems';
import { ClientCountBlock } from '@/components/ClientCountBlock/ClientCountBlock';

const ITEMS = [
  {
    id: 1,
    title: 'Месячный доход: 350.00',
  },
  {
    id: 2,
    title: 'Подписчиков: 682',
  },
  {
    id: 3,
    title: 'Срок с момента создания: 9 месяцев',
  },
];

const ProductPage = () => {
  return (
    <div className={styles.productPage}>
      <BackgroundCircles />
      <div className={styles.inner}>
        <div className={styles.content}>
          <Image
            src={'/assets/img/product.jpg'}
            width={723}
            height={482}
            alt='img'
            className={styles.img}
          />
          <div className={styles.right}>
            <h1 className={styles.title}>Адаптивная верстка</h1>
            <div className={styles.bottom}>
              <h2>Верстка сайта</h2>
              <p className={styles.price}>
                25 000 <span>Руб</span>
              </p>
              <button>Купить</button>
            </div>
          </div>
        </div>
        <LineItems items={ITEMS} />
        <div className={styles.clients}>
          <ClientCountBlock />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
