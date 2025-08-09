import React, { FC, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import { createPortal } from 'react-dom';
import { useHasHydrated } from '@/hooks/useHasHydrated';

interface INavbar {
  openMenu: boolean;
  onClose: () => void;
}

export const Navbar: FC<INavbar> = ({ onClose, openMenu }) => {
  const hasHydrated = useHasHydrated();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (openMenu) document.addEventListener('keydown', onKey);

    return () => document.removeEventListener('keydown', onKey);
  }, [openMenu, onClose]);

  if (!hasHydrated) return null;

  return createPortal(
    <AnimatePresence mode='wait'>
      {openMenu && hasHydrated && (
        <>
          <motion.div
            className={styles.overlay}
            variants={animateHelper('navbarOverlay')}
            initial={'hide'}
            animate={'show'}
            exit={'hide'}
            onClick={onClose}
          />

          <motion.div
            className={styles.root}
            variants={animateHelper('navbar')}
            initial={'hide'}
            animate={'show'}
            exit={'hide'}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
          >
            <div className={styles.content}>
              <div className={styles.wrapper}>
                <div>asdasd</div>
                <div>asdasd</div>
                <div>asdasd</div>
                <div>asdasd</div>
                <div>asdasd</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};
