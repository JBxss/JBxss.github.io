import React from "react";
import { useTranslation } from "react-i18next";
import { Keyboard, EffectCards, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import data from "./clients";
import "./testimonials.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

const Testimonials = () => {
  const { t } = useTranslation(["common"]);

  return (
    <section id="testimonials">
      <h5>{t("small_testimonial")}</h5>
      <h2>{t("testimonial")}</h2>

      <Swiper className="container testimonials__container"
      effect={"cards"}
      grabCursor={true}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 2250,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Keyboard, Autoplay, EffectCards, Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review"><i>"{review}"</i></small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
