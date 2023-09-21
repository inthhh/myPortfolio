import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow } from "swiper";
import { Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import MybirthdayImg from "./imgs/mybirthday.jpeg";
import StarbucksImg from "./imgs/startbucks.jpeg";
import AirplaneImg from "./imgs/airplane.jpeg";
import HackaImg from "./imgs/hacka.jpeg";
import Pompom from "./imgs/pompom.jpeg";

import Profile from "./SubPages/Profile";

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

function MainPage() {
  const movePage = useNavigate();

  const MoveToProfile = () => {
    movePage("/profile");
  };
  const MoveToChannel = () => {
    movePage("/channel");
  };
  const MoveToMainPj = () => {
    movePage("/main-projects");
  };
  const MoveToOthers = () => {
    movePage("/other-experiences");
  };

  const swiperContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (swiperContainerRef.current) {
      const swiper = new Swiper(swiperContainerRef.current, {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: "auto", // 한 번에 보여줄 슬라이드 개수 설정
        spaceBetween: 15, // 슬라이드 간의 간격 설정
        // loop: true,
        centeredSlides: true,
        speed: 1000,
        direction: "horizontal",
        grabCursor: false,
        // Swiper 옵션 설정
        effect: "coverflow",
        coverflowEffect: {
          rotate: 50,
          stretch: -100,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        },
      });
    }
  }, []);

  return (
    <div>
      <div ref={swiperContainerRef} className="wrap">
        <h1>
          안녕하세요! 😊
          <br /> 디자인을 사랑하는 <span>프론트엔드 개발자 지망생</span>
          <br /> OOO입니다.
        </h1>
        <ul className="auto">
          <li className="btnStart">{/* <i className="fas fa-play"></i> */}</li>
          <li className="btnStop">{/* <i className="fas fa-pause"></i> */}</li>
        </ul>
        <div className="swiper-wrapper">
          <div className="swiper-slide" onClick={MoveToProfile}>
            <div className="inner">
              <img src={MybirthdayImg} alt="my birthday img" />
              <div className="text-box">
                <p>About My Life</p>
                <div className="arrow"></div>
                <p style={{ fontSize: "14px", marginTop: "14px" }}>더보기</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide" onClick={MoveToChannel}>
            <div className="inner">
              <img src={Pompom} alt="pompom img" />
              <div className="text-box">
                <p>My Channel</p>
                <div className="arrow"></div>
                <p style={{ fontSize: "14px", marginTop: "14px" }}>더보기</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide" onClick={MoveToMainPj}>
            <div className="inner">
              <img src={AirplaneImg} alt="airplane img" />
              <div className="text-box">
                <p>Main Projects</p>
                <div className="arrow"></div>
                <p style={{ fontSize: "14px", marginTop: "14px" }}>더보기</p>
              </div>
            </div>
          </div>
          <div className="swiper-slide" onClick={MoveToOthers}>
            <div className="inner">
              <img src={HackaImg} alt="my hackathon img" />
              <div className="text-box">
                <p>Other Experiences</p>
                <div className="arrow"></div>
                <p style={{ fontSize: "14px", marginTop: "14px" }}>더보기</p>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default MainPage;
