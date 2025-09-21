import React from 'react';
import styles from './OurServices.module.scss';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import Image from 'next/image';
import IconBrand from '@/assets/img/icon-brand.svg';
import IconDollar from '@/assets/img/icon-dollar.svg';
import IconClients from '@/assets/img/icon-clients.svg';
import IconSearch from '@/assets/img/icon-search-cat.svg';
import IconTop from '@/assets/img/icon-top.svg';
import IconSeo from '@/assets/img/icon-seo.svg';
import IconShedule from '@/assets/img/icon-shedule.svg';
import IconSetting from '@/assets/img/icon-settings.svg';
import IconRocket from '@/assets/img/icon-rocket.svg';
import ProductsSection from '@/components/ProductsSection/ProductsSection';

const CATEGORIES = [
  {
    id: 1,
    title: 'Повышение узнаваемости бренда',
    icon: <IconBrand />,
  },
  {
    id: 2,
    title: 'Увеличение продаж',
    icon: <IconDollar />,
  },
  {
    id: 3,
    title: 'Увеличение клиентской базы',
    icon: <IconClients />,
  },
];

const CATEGORIES_2 = [
  {
    id: 1,
    title: 'Позиции сайта в поиске',
    icon: <IconSearch />,
  },
  {
    id: 2,
    title: 'Сайт в ТОП поиска',
    icon: <IconTop />,
  },
  {
    id: 3,
    title: 'SEO-оптимизация',
    icon: <IconSeo />,
  },
];

const CATEGORIES_3 = [
  {
    id: 1,
    title: 'Увеличение продаж',
    icon: <IconShedule />,
  },
  {
    id: 2,
    title: 'Оптимизация расходов',
    icon: <IconSetting />,
  },
  {
    id: 3,
    title: 'Запуск продукта',
    icon: <IconRocket />,
  },
];

const services = [
  {
    title: 'Повышение узнаваемости брнеда',
    subtitle: 'Интернет магазин  от которого продажи значительно вырастут',
    price: '550 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
  {
    title: 'Сайт-визитка',
    subtitle: 'Сайт с уникальным дизайном, на проверенной платформе с SEO-оптимизацией',
    price: '550 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
  {
    title: 'Лендинг',
    subtitle:
      'Вывод продукта на рынок с минимальными вложениями, эфективно запускаем одностраничники ',
    price: '350 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
];

const services_last = [
  {
    title: 'Повышение лояльности аудитории',
    subtitle: 'Разработаем и реализуем стратегию брендформанса. Увеличим продажи',
    price: '400 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: 'Разработка продающей статьи',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
    subtitle: 'От 2 000 символов',
  },
  {
    id: 2,
    title: 'Написание постов для блога',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
    subtitle: 'От 2 000 символов',
  },
  {
    id: 3,
    title: 'Привлечение лидов на сайт',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
    subtitle: 'От 1 000 лидов',
  },
];

const OurServices = () => {
  return (
    <div className={styles.ourServices}>
      <h1 className={styles.title}>Наши услуги:</h1>
      <div className={styles.catgegories}>
        <CategoriesSection categories={CATEGORIES} title='Комплексное продвижение' />
      </div>
      <div className={styles.services_section}>
        <div className={styles.imgWrapper}>
          <Image
            src={'/assets/img/bg-right-service.svg'}
            alt=''
            width={341}
            height={759}
            className={styles.bg_right_service}
          />
          <div className={styles.circle}></div>
        </div>
        <ServicesSection items={services} />
      </div>
      <div className={styles.catgegories}>
        <CategoriesSection categories={CATEGORIES_2} title='Поисковое продвижения сайта' />
      </div>
      <div className={styles.services_section}>
        <div className={styles.imgWrapper}>
          <Image
            src={'/assets/img/bg-right-service.svg'}
            alt=''
            width={341}
            height={759}
            className={styles.bg_right_service}
          />
          <div className={styles.circle}></div>
        </div>
        <ServicesSection items={services} />
      </div>
      <div className={styles.catgegories}>
        <CategoriesSection categories={CATEGORIES_3} title='Performance-маркетинг' />
      </div>
      <div className={styles.services_section}>
        <div className={styles.imgWrapper}>
          <Image
            src={'/assets/img/bg-right-service.svg'}
            alt=''
            width={341}
            height={759}
            className={styles.bg_right_service}
          />
          <div className={styles.circle}></div>
        </div>
        <ServicesSection items={services} />
      </div>
      <h1 className={styles.last_h1}>
        Так же можем предложить <span>Brandformance-маркетинг</span>
      </h1>
      <ServicesSection items={services_last} />
      <h1 className={styles.last_h1}>
        Не нашли нужной услуги для себя, не проблема, вы можете подобрать для себя{' '}
        <span>услугу</span> которые представлены ниже <span>рознично</span>, так же можно{' '}
        <span>просчить на онлайн калькуляторе</span> в зависимости от обьема вашего запроса
        <span>стоимость</span>
      </h1>
      <div className={styles.products_section}>
        <ProductsSection items={PRODUCTS} buttonText='Подсчитать' />
      </div>
    </div>
  );
};

export default OurServices;
