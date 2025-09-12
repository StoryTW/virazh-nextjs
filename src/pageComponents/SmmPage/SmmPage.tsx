import StartSectionPages from '@/components/StartSectionPages/StartSectionPages';
import React from 'react';
import OurServices from './OurServices/OurServices';

const ITEMS = [
  {
    id: 1,
    title: 'Стоимость SMM',
    text: 'Уменьшаем стоимость привлечения подписчика в среднем на 40% уже в первые три месяца сотрудничества',
  },
  {
    id: 2,
    title: 'Почему SMM',
    text: 'Снижаем затраты наших клиентов более чем на 30%!',
  },
  {
    id: 3,
    title: 'Удовлетворенность',
    text: '95% наших клиентов в сфере SMM остаются довольны сотрудничеством с нами!',
  },
];

const SmmPage = () => {
  return (
    <div>
      <StartSectionPages
        subtitle='ПРИВЛЕЧЕНИЕ АУДИТОРИИ В СОЦИАЛЬНЫХ СЕТЯХ'
        title='SMM ПРОДВИЖЕНИЕ'
        items={ITEMS}
      />
      <OurServices />
    </div>
  );
};

export default SmmPage;
