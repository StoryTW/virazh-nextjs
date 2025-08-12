import React, { FC } from 'react';
import styles from './ReviewCard.module.scss';
import Image from 'next/image';

interface IReviewCard {
  name: string;
  date: string;
  comment: string;
  image: string;
}

export const ReviewCard: FC<IReviewCard> = ({ name, date, comment, image }) => {
  return (
    <div className={styles.root}>
      <Image
        src={image}
        alt={`emoji_${name}`}
        width={90}
        height={90}
        quality={100}
        className={styles.image}
      />
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.comment}>{comment}</div>
      </div>
    </div>
  );
};
