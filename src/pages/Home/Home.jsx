import React from "react";
import HeadNavigation from "../../components/HeadNavigation";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <HeadNavigation />
    </>
  );
}

/*
============================================================
🧭 메인 네비게이션 레이아웃 설명

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
