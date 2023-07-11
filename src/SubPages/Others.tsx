import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./SubPage.css";
import ExpersImg from "./subimgs/expers.png";
import Fade from "../Fade";

function Others() {
  const handleClick = () => {
    window.open(
      "https://zoeportfolio.notion.site/557d44c2eb0b4c67a020ec6c8cbe7bf0?v=091d9ac2651540dbbcd39fae0c3c4ba1&pvs=4",
      "_blank"
    );
  };
  return (
    <div>
      <div className="sub-wrap" style={{ height: "100%" }}>
        <Fade>
          <div>
            <div className="title">
              <h1>Experiences</h1>
            </div>
            <div className="title">
              <h1> </h1>
            </div>
            <div className="one-block">
              <img src={ExpersImg} alt="expers" style={{ width: "700px", height: "auto" }}></img>
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
