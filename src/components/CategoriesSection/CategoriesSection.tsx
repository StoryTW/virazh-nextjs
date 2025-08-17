'use client';

import React, { FC, ReactNode, useState } from 'react';
import styles from './CategoriesSection.module.scss';
import clsx from 'clsx';
interface ICategoriesSectionProps {
  title: string;
  categories: {
    title: string;
    icon: ReactNode;
    id: number;
  }[];
}

const CategoriesSection: FC<ICategoriesSectionProps> = ({ title, categories }) => {
  const [current, setCurrent] = useState(categories[0].id);
  return (
    <div className={styles.categoriesSection}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <div key={cat.id} className={clsx(styles.cat)} onClick={() => setCurrent(cat.id)}>
            <div className={clsx(styles.catWrapper, { [styles.active]: cat.id === current })}>
              {cat.icon}
            </div>
            <p className={clsx(styles.title, { [styles.active]: cat.id === current })}>
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
