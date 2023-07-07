import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SubPage.css";
import Studying from "./subimgs/studying.jpeg";
import LoveCat from "./subimgs/ilovecat.jpeg";
import Cats from "./subimgs/cats.jpeg";
import Fade from "../Fade";
import myroadmap from "./subimgs/myroadmap.png";

function Profile() {
  
  return (
    <div>
      <div className="sub-wrap">
        <Fade>
          <div>
            <div className="title">
              <h1>Profile</h1>
            </div>

            <div className="one-block">
              <img src={LoveCat} alt="lovecat"></img>
              <div className="contents">
                <br />
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
          </div>
        </Fade>
        <Fade duration={3000}>
          <div>
            <div className="title-right">
              <h1>Introduce</h1>
            </div>
            <div className="one-block">
              <div className="contents">
                <br />
                <p>
                  좌우명은 <span>‘새옹지마’</span>입니다.
                  <br /> 긍정적인 마음가짐을 가진 덕분에, 빠른 멘탈 회복력이 제 강점이 되었습니다.
                </p>
                <br />
                <p>
                  별명은 <span>‘조용한 변태’</span>입니다.
                  <br /> 눈물을 비추는 한이 있더라도 모든 의문점에 파고들던 성격 때문에 붙은 별명입니다.
                </p>

                <br />
              </div>
              <img src={Studying} alt="studying"></img>
            </div>
          </div>
        </Fade>
        <Fade duration={5000}>
          <div>
            <div className="title">
              <h1>About Me</h1>
            </div>

            <div className="one-block">
              <img src={Cats} alt="cats"></img>
              <div className="contents">
                <br />
                <p>다양한 경험으로 인생을 빌드업하는 중인 대학생입니다.</p>
                <p>
                  <span>웹 프론트엔드, UX/UI디자인, 기획</span> 등의 분야에 관심이 있으며
                  <br /> 배운 지식을 공유하는 것을 좋아합니다.
                </p>
                <br />
                <p>특유의 여유와 끈기를 바탕으로 프로젝트를 수행합니다.</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade duration={7000}>
          <div>
            {/* <div className="title"> */}
            <h1 style={{ marginTop: "50px", marginLeft: "200px" }}>My Life Road</h1>
            {/* </div> */}

            <div className="roadmap">
              <div></div>
              <br />
              <img src={myroadmap} alt="my road map" style={{ width: "900px", height: "auto" }}></img>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Profile;
