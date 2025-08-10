import React from 'react';
import StartSection from './StartSection/StartSection';
import styles from './MainPage.module.scss';
import SecondSection from './SecondSection/SecondSection';
import ThreeSection from './ThreeSection/ThreeSection';

const MainPage = () => {
  return (
    <div className={styles.MainPage}>
      <StartSection />
      <SecondSection />
      <ThreeSection />
    </div>
  );
};

export default MainPage;
