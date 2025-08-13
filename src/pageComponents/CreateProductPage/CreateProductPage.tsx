import React from 'react';
import styles from './CreateProductPage.module.scss';
import { CreateProductForm } from './CreateProductForm/CreateProductForm';

export const CreateProductPage = () => {
  return (
    <main className={styles.root}>
      <div>
        <CreateProductForm />
      </div>
    </main>
  );
};
