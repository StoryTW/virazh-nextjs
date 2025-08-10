import React from 'react';
import styles from './SecondSection.module.scss';

const ITEMS = [
  {
    id: 1,
    title: 'Партнерство',
    text: 'Строим партнерство на основе взаимной выгоды — когда выигрывают все!',
  },
  {
    id: 2,
    title: 'Выгода',
    text: 'Сокращаем ваши расходы более чем на 30% благодаря комплексным решениям!',
  },
  {
    id: 3,
    title: 'Работа вдолгую',
    text: 'Разрабатываем надежные системы, которые обеспечивают результаты как в настоящем, так и в будущем.',
  },
];

const SecondSection = () => {
  return (
    <div className={styles.SecondSection}>
      <h1 className={styles.title}>Создаем а так же продвигаем бренды</h1>
      <h1 className={styles.title2}>с помощью интернет-маркетинга </h1>
      <div className={styles.items_wrapper}>
        <div className={styles.items}>
          {ITEMS.map((item) => (
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
    </div>
  );
};

export default SecondSection;
