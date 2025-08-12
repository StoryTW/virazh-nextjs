import React, { FC, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import { createPortal } from 'react-dom';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { NavDropdown } from '@/components/ui/NavDropdown/NavDropdown';
import { ROUTER } from '@/utils/router';
import { NavTriggerItem } from './NavTriggerItem/NavTriggerItem';
import { RemoveScroll } from 'react-remove-scroll';

interface INavbar {
  openMenu: boolean;
  onClose: () => void;
}

const OPTIONS_ONE = [
  {
    name: 'Наши преимущества',
    href: ROUTER.OUR_ADVANTAGES,
  },
  {
    name: 'Наши партнеры',
    href: ROUTER.PARTNERS,
  },
  {
    name: 'Миссия компании',
    href: ROUTER.MISSION_OF_COMPANY,
  },
];

const OPTIONS_TWO = [
  {
    name: 'Продвижение в социальных сетях',
    href: ROUTER.SOCIAL_MEDIA_PROMOTION,
  },
  {
    name: 'Разработка сайтов, дизайн сайтов, верстка',
    href: ROUTER.WEBSITE_DEVELOPMENT,
  },
  {
    name: 'SEO продвижение сайтов',
    href: ROUTER.SEO_PROMOTION,
  },
];

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
        <RemoveScroll>
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
                <NavDropdown triggerName='Мы' options={OPTIONS_ONE} onRedirect={onClose} />

                <NavDropdown triggerName='Наши услуги' options={OPTIONS_TWO} onRedirect={onClose} />

                <NavTriggerItem name='9 часто задаваемых вопросов' href={ROUTER.FAQ} />

                <NavTriggerItem name='Отзывы клиентов' href={ROUTER.REVIEWS} />

                <NavTriggerItem name='Вход в личный кабинет' href={ROUTER.PROFILE} />

                <NavTriggerItem name='Контакты' href={ROUTER.CONTACS} />
              </div>
            </div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>,
    document.body,
  );
};
