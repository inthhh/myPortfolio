import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SubPage.css";
import Studying from "./subimgs/studying.jpeg";
import MacCat from "./subimgs/macCat.png";
import CodingCat from "./subimgs/codingCat.png";
import Fade from "../Fade";

function Channel() {
  const handleClick = () => {
    window.open("https://github.com/inthhh", "_blank");
  };
  const handleClickBlog = () => {
    window.open("https://xxilliant.tistory.com/", "_blank");
  };
  return (
    <div>
      <div className="sub-wrap">
        <Fade>
          <div>
            <div className="title">
              <h1>GitHub</h1>
            </div>

            <div className="one-block">
              <img src={CodingCat} alt="lovecat" style={{ width: "200px", height: "auto" }}></img>
              <div className="contents">
                <p>
                  <span onClick={handleClick} style={{ cursor: "pointer" }}>
                    https://github.com/inthhh
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade duration={3000}>
          <div>
            <div className="title-right">
              <h1>Tech-Blog</h1>
            </div>
            <div className="one-block">
              <div className="contents">
                <p>
                  <span onClick={handleClickBlog} style={{ cursor: "pointer" }}>
                    https://xxilliant.tistory.com/
                  </span>
                </p>
              </div>
              <img src={MacCat} alt="studying" style={{ width: "200px", height: "auto" }}></img>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Channel;
