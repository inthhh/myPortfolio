import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

function App() {
  const swiperContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (swiperContainerRef.current) {
      const swiper = new Swiper(swiperContainerRef.current, {
        slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수 설정
        spaceBetween: 15, // 슬라이드 간의 간격 설정
        loop: true,
        centeredSlides: true,
        // Swiper 옵션 설정
      });

      // swiper-button-next 클릭 시 이벤트 처리
      const nextButton = document.querySelector(".swiper-button-next");
      if (nextButton) {
        nextButton.addEventListener("click", () => {
          swiper.slideNext(); // 다음 슬라이드로 이동
        });
      }

      // swiper-button-prev 클릭 시 이벤트 처리
      const prevButton = document.querySelector(".swiper-button-prev");
      if (prevButton) {
        prevButton.addEventListener("click", () => {
          swiper.slidePrev(); // 이전 슬라이드로 이동
        });
      }
    }
  }, []);

  return (
    <div ref={swiperContainerRef} className="wrap">
      <h1>
        안녕하세요! 😊
        <br /> 디자인을 사랑하는 <span>프론트엔드 개발자 지망생</span>
        <br /> 정수현입니다.
      </h1>
      <ul className="auto">
        <li className="btnStart">
          <i className="fas fa-play"></i>
        </li>
        <li className="btnStop">
          <i className="fas fa-pause"></i>
        </li>
      </ul>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="inner">
            <h1>1</h1>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="inner">
            <h1>2</h1>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="inner">
            <h1>3</h1>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="inner">
            <h1>4</h1>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="inner">
            <h1>5</h1>
          </div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default App;
