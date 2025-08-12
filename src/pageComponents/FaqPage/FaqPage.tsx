import React from 'react';
import styles from './FaqPage.module.scss';
import { FAQ_DATA } from './data';
import { FaqItem } from './FaqItem/FaqItem';
import { ClientCountBlock } from '@/components/ClientCountBlock/ClientCountBlock';
import { BackgroundLights } from './BackgroundLights/BackgroundLights';

const FaqPage = () => {
  return (
    <main className={styles.root}>
      <BackgroundLights />

      <section className={styles.section}>
        <h1 className={styles.title}>Часто задаваемые вопросы</h1>

        <div className={styles.content}>
          {FAQ_DATA.map((item, index) => {
            return <FaqItem key={index} question={item.question} answer={item.answer} />;
          })}
        </div>

        <ClientCountBlock />
      </section>
    </main>
  );
};

export default FaqPage;
