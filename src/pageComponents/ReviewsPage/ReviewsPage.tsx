import React from 'react';
import styles from './ReviewsPage.module.scss';
import { ClientCountBlock } from '@/components/ClientCountBlock/ClientCountBlock';
import { ReviewsSwiper } from './ReviewsSwiper/ReviewsSwiper';

const ReviewsPage = () => {
  return (
    <main className={styles.root}>
      <section className={styles.section}>
        <h1 className={styles.title}>Отзывы наших клиентов:</h1>

        <div className={styles.content}>
          <ReviewsSwiper />
        </div>

        <ClientCountBlock />
      </section>
    </main>
  );
};

export default ReviewsPage;
