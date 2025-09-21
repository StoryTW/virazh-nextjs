import React from 'react';
import StartSectionPages from '@/components/StartSectionPages/StartSectionPages';
import OurServices from './OurServices/OurServices';

const ITEMS = [
  {
    id: 1,
    title: 'Качество',
    text: 'Среднее время загрузки сайтов наших клиентов — всего 1,5 секунды, в то время как по России в целом этот показатель составляет около 8,7 секунд',
  },
  {
    id: 2,
    title: 'Сроки',
    text: 'Мы создаем уникальные сайты всего за 50 дней, полностью подготовленные для SEO-продвижения — с продуманным контентом и дизайном. И это не просто лендинги! (хотя их тоже делаем)',
  },
  {
    id: 3,
    title: 'Надежность',
    text: '9Все наши специалисты — в штате: аналитики, программисты, бэкенд и фронтенд разработчики, UX-дизайнеры, художники и тестировщики.',
  },
];

const SitesPage = () => {
  return (
    <div>
      <StartSectionPages title='РАЗРАБОТКА САЙТОВ, ДИЗАЙН САЙТОВ, ВЕРСТКА САЙТОВ' items={ITEMS} />
      <OurServices />
    </div>
  );
};

export default SitesPage;
