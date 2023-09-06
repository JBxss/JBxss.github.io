import React from "react";
import { useTranslation } from "react-i18next";
import "./testimonials.css";
import { DataES, DataEN } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Testimonials = () => {
  const { t, i18n } = useTranslation(["testimonials"]);
  const ReviewStrings = i18n.language === "en" ? DataEN : DataES;

  return (
    <section className="testimonial container section">
      <span className="section__subtitle">{t("testimonials_subtitle")}</span>
      <h2 className="section__title">{t("testimonials_title")}</h2>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        autoplay={{
          delay: 2250,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {ReviewStrings.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">"{description}"</p>
              <a
                href="https://www.linkedin.com/in/jbxss/"
                className="testimonial__button"
              >
                {t("testimonials_verify")} 
                <i className="bx bx-right-arrow-alt testimonial__button-icon"></i>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
