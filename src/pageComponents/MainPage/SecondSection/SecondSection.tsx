import React from 'react';
import styles from './SecondSection.module.scss';
import LineItems from '@/components/LineItems/LineItems';

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
      <LineItems items={ITEMS} />
    </div>
  );
};

export default SecondSection;
