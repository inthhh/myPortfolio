import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SubPage.css";
import PjImg from "./subimgs/projects.png";
import Fade from "../Fade";

function Others() {
  const handleClick = () => {
    window.open(
      "https://zoeportfolio.notion.site/8e845ce2e0d345489de21ca05de0e9cb?v=78feee2269c047908a23b44ebd43f753&pvs=4",
      "_blank"
    );
  };
  return (
    <div>
      <div className="sub-wrap" style={{ height: "100%" }}>
        <Fade>
          <div>
            <div className="title">
              <h1>Projects</h1>
            </div>
            <div className="title">
              <h1> </h1>
            </div>
            <div className="one-block">
              <img src={PjImg} alt="expers" style={{ width: "750px", height: "auto" }}></img>
              <div className="contents">
                <p onClick={handleClick} style={{ cursor: "pointer" }}>
                  노션 바로가기 {">"}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Others;
