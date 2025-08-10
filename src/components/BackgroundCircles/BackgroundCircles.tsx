'use client';

import React from 'react';
import { motion } from 'motion/react';
import styles from './BackgroundCircles.module.scss';
import clsx from 'clsx';

const BackgroundCircles = () => {
  return (
    <div className={styles.blurred_spheres_wrapper}>
      <div className={styles.blurred_spheres_inner}>
        <motion.div
          className={clsx(styles.sphere, styles.sphere_one)}
          initial={{ x: -200, y: -50 }}
          animate={{
            x: [-200, -50, 850, -200],
            y: [-50, 120, -80, -50],
            rotate: [0, 6, -6, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />

        <motion.div
          className={clsx(styles.sphere, styles.sphere_two)}
          initial={{ x: 850, y: 120 }}
          animate={{
            x: [850, 50, -180, 850],
            y: [120, -140, 40, 120],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
};

export default BackgroundCircles;
