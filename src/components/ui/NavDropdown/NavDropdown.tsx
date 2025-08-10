import React, { FC, useState } from 'react';
import styles from './NavDropdown.module.scss';
import { AnimatePresence, motion } from 'motion/react';
import { animateHelper } from '@/utils/helpers/animation.helper';
import Link from 'next/link';

interface INavDropdown {
  options: INavDropdownOption[];
  triggerName: string;
  onRedirect?: () => void;
}

interface INavDropdownOption {
  name: string;
  href: string;
}

export const NavDropdown: FC<INavDropdown> = ({ triggerName, options, onRedirect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.root}>
      <button className={styles.trigger} onClick={toggle} tabIndex={-1}>
        <div className={styles.triggerWrapper}>{triggerName}</div>
      </button>

      <AnimatePresence mode='wait'>
        {isOpen && (
          <motion.div
            className={styles.content}
            variants={animateHelper('navDropdown')}
            initial={'hide'}
            animate={'show'}
            exit={'hide'}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.contentWrapper}>
              <ul className={styles.list}>
                {options.map((item, index) => {
                  return (
                    <li key={index} className={styles.item}>
                      <Link href={item.href} className={styles.link} onClick={onRedirect}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
