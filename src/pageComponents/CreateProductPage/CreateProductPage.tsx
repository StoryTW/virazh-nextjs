import React from 'react';
import styles from './CreateProductPage.module.scss';
import { CreateProductForm } from './CreateProductForm/CreateProductForm';
import { StepsWrapper } from './CreateProductForm/StepsWrapper/StepsWrapper';

export const CreateProductPage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <CreateProductForm />
      </div>
    </main>
  );
};
