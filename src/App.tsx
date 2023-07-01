import React from "react";
import logo from "./logo.svg";
import "./App.css";

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
    </div>
  );
}

export default App;
