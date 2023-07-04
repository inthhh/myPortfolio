import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SubPage.css";
import Studying from "./subimgs/studying.jpeg";
import LoveCat from "./subimgs/ilovecat.jpeg";

function Profile() {
  return (
    <div>
      <div className="sub-wrap">
        <div className="title">
          <h1>Profile</h1>
        </div>
        <div className="one-block">
          <img src={LoveCat} alt="lovecat"></img>
          <div className="contents">
            <p>이름 : 정수현 (Zoe)</p>
            <p>생년월일 : 2001/06/20</p>
            <p>한국항공대학교 소프트웨어학과 4학년 재학</p>
            <br />
            <p>
              <span>Contact</span>
            </p>
            <p>📧 Email : glass005533@gmail.com</p>
            <p>📞 Phone : 010.6631.7911</p>
          </div>
        </div>
        <div className="title-right">
          <h1>Introduce</h1>
        </div>
        <div className="one-block">
          <div className="contents">
            <p>이름 : 정수현 (Zoe)</p>
            <p>생년월일 : 2001/06/20</p>
            <p>한국항공대학교 소프트웨어학과 4학년 재학</p>
            <br />
            <p>
              <span>Contact</span>
            </p>
            <p>📧 Email : glass005533@gmail.com</p>
            <p>📞 Phone : 010.6631.7911</p>
          </div>
          <img src={Studying} alt="studying"></img>
        </div>
      </div>
    </div>
  );
}

export default Profile;
