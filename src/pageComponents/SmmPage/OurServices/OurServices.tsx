import React from 'react';
import styles from './OurServices.module.scss';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';

import IconInst from '@/assets/img/inst.svg';
import IconYoutube from '@/assets/img/youtube.svg';
import IconFacebook from '@/assets/img/facebook.svg';
import IconDzen from '@/assets/img/dzen.svg';
import IconOdno from '@/assets/img/odnoklasnik.svg';
import IconPeriskope from '@/assets/img/periskope.svg';
import IconPinterest from '@/assets/img/pinterest.svg';
import IconRutube from '@/assets/img/rutube.svg';
import IconTelegram from '@/assets/img/telegram.svg';
import IconTicktok from '@/assets/img/ticktok.svg';
import IconTwitter from '@/assets/img/twitter.svg';
import IconVk from '@/assets/img/vk.svg';

const CATEGORIES = [
  {
    id: 1,
    title: 'Instagram',
    icon: <IconInst />,
  },
  {
    id: 2,
    title: 'Вконтакте',
    icon: <IconVk />,
  },
  {
    id: 3,
    title: 'YouTube',
    icon: <IconYoutube />,
  },
  {
    id: 4,
    title: 'Telegram',
    icon: <IconTelegram />,
  },
  {
    id: 5,
    title: 'TikTok',
    icon: <IconTicktok />,
  },
  {
    id: 6,
    title: 'RuTube',
    icon: <IconRutube />,
  },
  {
    id: 7,
    title: 'Facebook',
    icon: <IconFacebook />,
  },
  {
    id: 8,
    title: 'Одноклассн-ики',
    icon: <IconOdno />,
  },
  {
    id: 9,
    title: 'Twitter',
    icon: <IconTwitter />,
  },
  {
    id: 10,
    title: 'Дзен',
    icon: <IconDzen />,
  },
  {
    id: 11,
    title: 'Periscope',
    icon: <IconPeriskope />,
  },
  {
    id: 12,
    title: 'Pinterest',
    icon: <IconPinterest />,
  },
];

const OurServices = () => {
  return (
    <div className={styles.ourServices}>
      <h1 className={styles.title}>Наши услуги:</h1>
      <div className={styles.catgegories}>
        <CategoriesSection
          categories={CATEGORIES}
          title='Привлечение подписчиков,  лайков,  просмотров:'
        />
      </div>
    </div>
  );
};

export default OurServices;
