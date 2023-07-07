import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SubPage.css";
import Studying from "./subimgs/studying.jpeg";
import LoveCat from "./subimgs/ilovecat.jpeg";
import Cats from "./subimgs/cats.jpeg";
import Fade from "../Fade";
import myroadmap from "./subimgs/myroadmap.png";

function Channel() {
  return (
    <div>
      <div className="sub-wrap">
        <Fade>
          <div>
            <div className="title">
              <h1>GitHub</h1>
            </div>

            <div className="one-block">
              <img src={LoveCat} alt="lovecat"></img>
              <div className="contents">
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
              <h1>Tech-Blog</h1>
            </div>
            <div className="one-block">
              <div className="contents">
                <br />

                <br />
              </div>
              <img src={Studying} alt="studying"></img>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Channel;
