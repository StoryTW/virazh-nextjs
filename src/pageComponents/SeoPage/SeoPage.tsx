import React from 'react';
import StartSectionPages from '@/components/StartSectionPages/StartSectionPages';
import OurServices from './OurServices/OurServices';

const ITEMS = [
  {
    id: 1,
    title: 'Опыт',
    text: 'Более 1700 успешных проектов по SEO-продвижению в различных ценовых сегментах позволяет нам гарантировать эффективные решения, адаптированные под уникальные потребности каждого клиента и его бизнеса',
  },
  {
    id: 2,
    title: 'Результаты',
    text: '85% наших клиентов отмечают значительный рост трафика и улучшение позиций в поисковых системах, что подтверждает эффективность наших SEO-стратегий и профессиональный подход',
  },
  {
    id: 3,
    title: 'Комплексный подход',
    text: 'Мы предлагаем полный спектр услуг по SEO-оптимизации: от проведения аудита сайта и технической настройки до контент-маркетинга и работы с отзывами',
  },
];

const SeoPage = () => {
  return (
    <div>
      <StartSectionPages title='SEO-ПРОДВИЖЕНИЕ САЙТОВ' items={ITEMS} />
      <OurServices />
    </div>
  );
};

export default SeoPage;
