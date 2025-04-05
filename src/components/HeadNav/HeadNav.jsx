import React from "react";
import { useState } from "react";
import "./HeadNav.scss";

import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function HeadNav() {
  const [logoName, setLogoName] = useState("Mr.Beck");

  const [isShown, setIsShown] = useState(true);
  const toggleMenu = () => setIsShown((prev) => !prev);

  const 햄버거쇼기능 = {
    className: `nav-hamburger ${isShown ? "보임" : "안보임"}`,
    onClick: toggleMenu
  };

  const 닫기링크쇼기능 = {
    className: `nav-close ${isShown ? "안보임" : "보임"}`,
    onClick: () => {
      toggleMenu();
    }
  };

  return (
    <>
      <nav id="DesktopNav">
        <div className="nav-logo">{logoName}</div>
        <ul className="nav-links">
          <li className="nav-links-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-links-item">
            <a href="#experience">Experience</a>
          </li>
          <li className="nav-links-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-links-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav id="MobileNav">
        <div className="nav-logo">{logoName}</div>
        <RxHamburgerMenu {...햄버거쇼기능} />
        <div {...닫기링크쇼기능}>
          <CgClose />
          <ul className="nav-links">
            <li className="nav-links-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-links-item">
              <a href="#experience">Experience</a>
            </li>
            <li className="nav-links-item">
              <a href="#contact">Projects</a>
            </li>
            <li className="nav-links-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

/*
============================================================
🧭 메인 네비게이션 레이아웃 설명

✅미디어 쿼리

max min은 거꾸로 읽는것이고 이 코드 보면 반응형의 이해도 편해질것이다
그냥 공식으로 min - max -max 방식으로 1024 768 480 으로 쓰면됨

미디어 쿼리 쓰는 방법을 공식화 한것을 배운걸로 치자
2025년04월01일 기준으로는 아직 클릭시 햄버거 메뉴의 링크가 나오지는 않았지만
그것까지 마스터 하면 미디어쿼리도 끝이다~!




✅ 구성 요소
1. .nav-logo → 좌측 로고 영역
2. .nav-menu / .nav-menu-link → 우측 네비게이션 메뉴 리스트

💡 "메인 네비게이션"이라는 이름으로 동일한 구조를 구현해보자.
   핵심 요소 2가지만 정확히 이해하면 어렵지 않다!

============================================================

예시 구조:
<nav id="main-nav">
  <div className="nav-logo">John Doe</div>
  <div>
    <ul className="nav-menu">
      <li className="nav-menu-link">About</li>
      <li className="nav-menu-link">Experience</li>
      <li className="nav-menu-link">Projects</li>
      <li className="nav-menu-link">Contact</li>
    </ul>
  </div>
</nav>

============================================================
*/
