import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          Мы рады ответить на любые ваши вопросыс 11:00 до 21:00 вт-сб, по указанным контактам:
        </div>

        <div className={styles.text2}>
          <span>Почта:</span> <a href='mailto:virazhsolution@mail.ru'>virazhsolution@mail.ru</a>
        </div>

        <div className={styles.text3}>Моментальный ответ</div>

        <div className={styles.text2}>
          <span>Telegram:</span>{' '}
          <a href='https://t.me/Virazh_solution' target='_blank' rel='noopener noreferrer'>
            t.me/Virazh_solution
          </a>
        </div>

        <div className={clsx(styles.text3, styles.marginBottom)}>Онлайн 24/7</div>

        <div className={styles.text3}>Vrazhsolution 2025 - Все права защищены</div>
      </div>
    </footer>
  );
};
