'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiperRef } from '@/hooks/useSwiperRef';
import { REVIEWS_DATA } from '../data';
import styles from './ReviewsSwiper.module.scss';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { ReviewButtons } from './ReviewButtons/ReviewButtons';

export const ReviewsSwiper = () => {
  const { swiperRef, handlePrev, handleNext } = useSwiperRef();

  return (
    <div className={styles.root}>
      <Swiper
        loop
        modules={[Navigation]}
        slidesPerView={3}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 3,
        //     spaceBetween: 8,
        //   },
        //   475: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   640: {
        //     slidesPerView: 6,
        //     spaceBetween: 12,
        //   },
        //   768: {
        //     slidesPerView: 9,
        //     spaceBetween: 12,
        //   },
        //   1024: {
        //     slidesPerView: 10,
        //     spaceBetween: 12,
        //   },
        //   1280: {
        //     slidesPerView: 14,
        //     spaceBetween: 12,
        //   },
        // }}
        spaceBetween={6}
        // className={styles.swiper}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {REVIEWS_DATA.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <ReviewCard {...card} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <ReviewButtons handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};
