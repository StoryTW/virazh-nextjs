import React from 'react';
import styles from './OurServices.module.scss';
import CategoriesSection from '@/components/CategoriesSection/CategoriesSection';
import ServicesSection from '@/components/ServicesSection/ServicesSection';
import Image from 'next/image';
import ProductsSection from '@/components/ProductsSection/ProductsSection';

import IconSale from '@/assets/img/icon-sale.svg';
import IconVizitka from '@/assets/img/icon-vizitka.svg';
import IconSite from '@/assets/img/icon-site.svg';

const CATEGORIES = [
  {
    id: 1,
    title: 'Сайт для продаж',
    icon: <IconSale />,
  },
  {
    id: 2,
    title: 'Сайт-визитка',
    icon: <IconVizitka />,
  },
  {
    id: 3,
    title: 'Сайт лендинг',
    icon: <IconSite />,
  },
];

const services = [
  {
    title: 'Сайт для продаж',
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

const services2 = [
  {
    title: 'Узнававемость',
    subtitle: 'Цена 780руб - за 1000 (~8.86$)Выбор таргетов',
    price: '200 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
  {
    title: 'Заявки',
    subtitle: 'Цена 780руб - за 1000 (~8.86$)Выбор таргетов',
    price: '200 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
  {
    title: 'Вовлеченность',
    subtitle: 'Цена 780руб - за 1000 (~8.86$)Выбор таргетов',
    price: '200 000',
    text: 'Описание Старт услуги: 0-1 час Скорость: 20 -200 за 24 часа. Качество: Живые люди, офферы хорошего качества, минимальный процент отписок Гео: Рф + Снг Условие: В поле "ссылка на заказ" вставлять ссылку на аккаунт Доп. Информация: Без списаний. Просматривают посты в ленте, возможна активность.',
  },
];

const PRODUCTS = [
  {
    id: 1,
    title: 'Разработка банера на сайт',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 2,
    title: 'Разработка банера на сайт',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 3,
    title: 'Разработка банера на сайт',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },

  {
    id: 4,
    title: 'Crypto magiс',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 5,
    title: 'Crypto magiс',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 6,
    title: 'Crypto magiс',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 7,
    title: 'Crypto magiс',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 8,
    title: 'Crypto magiс',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
  {
    id: 9,
    title: 'Crypto magiс',
    img: '/assets/img/product.jpg',
    category: 'Криптовалюта',
    price: '6 000',
  },
];

const OurServices = () => {
  return (
    <div className={styles.ourServices}>
      <h1 className={styles.title}>Наши услуги:</h1>
      <div className={styles.catgegories}>
        <CategoriesSection categories={CATEGORIES} title='Комплексные услуги по созданию сайтов:' />
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
      <div className={styles.products_section}>
        <h1 className={styles.h1_products}>Отдельные услуги гафического а так же веб дизайна:</h1>
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
        <ProductsSection items={PRODUCTS} />
        <div className={styles.footerContent}>
          <h3>
            Как услуги графического и веб дизайна могут помочь вам выделиться на конкурентном рынке?
          </h3>
          <p>
            Графика необходима для любого бизнеса — будь то крупная компания или малый
            предприниматель. Она способствует повышению узнаваемости бренда и создает
            профессиональный имидж. Профессиональный графический дизайн помогает выделиться среди
            конкурентов, делая ваш бизнес более заметным и запоминающимся. Существует множество
            видов услуг графического дизайна, поэтому важно выбрать те, что максимально
            соответствуют потребностям вашего бизнеса. Ключевые услуги включают разработку логотипа,
            дизайн веб-сайта, создание брендовых материалов и многое другое — всё для того, чтобы
            ваш бренд выглядел привлекательно и убедительно.
          </p>
        </div>
      </div>
      <div className={styles.products_section_wrapper}>
        <div className={styles.products_section}>
          <h1 className={styles.h1_products}>
            <span>Верстка сайта</span> (процесс преобразования макета дизайна в работающий веб-сайт,
            который отображается в браузере)
          </h1>
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
          <ProductsSection items={PRODUCTS} />
          <div className={styles.footerContent}>
            <h3>Существует несколько вариантов выполнения вёрстки сайтов:</h3>
            <ul>
              <li>
                Стандартная структура в виде прямоугольных блоков, которая обычно применяется для
                создания визиток и блогов (включая такие элементы, как футер, информационная часть и
                шапка).
              </li>
              <li>
                Использование различных технологий, таких как jQuery и JavaScript, для повышения
                быстродействия и визуальных эффектов сайта.
              </li>
              <li>
                Сложная структура вёрстки, востребованная при создании блогов и интернет-магазинов,
                с большим количеством графических элементов и нестандартных решений (например,
                корпоративные ресурсы).
              </li>
              <li>
                Адаптивная вёрстка — наиболее популярный современный подход, при котором сайт
                одинаково хорошо отображается на компьютерах и мобильных устройствах вне зависимости
                от браузера. Такой вариант требует больше времени на разработку, но обеспечивает
                отличный пользовательский опыт на любых устройствах.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className={styles.h1_footer}>
        Не нашли нужной услуги для себя, не проблема, вы можете сформулировать свой{' '}
        <span>индивидуальный запрос</span> в <span>форме ниже</span>, после заполнения которой
        сформируется зайвка на товар <span>с актуальной ценой</span> в <span>вашей корзине</span>
      </h1>
    </div>
  );
};

export default OurServices;
