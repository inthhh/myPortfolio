import React from "react";
import "./App.css";
import MainSwiper from "./MainSwipers/MainSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <div className="wrap">
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
          <div className="inner"></div>
        </div>
        <div className="swiper-slide">
          <div className="inner"></div>
        </div>
        <div className="swiper-slide">
          <div className="inner"></div>
        </div>
        <div className="swiper-slide">
          <div className="inner"></div>
        </div>
        <div className="swiper-slide">
          <div className="inner"></div>
        </div>
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default App;
