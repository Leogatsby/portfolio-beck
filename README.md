#포토폴리오 사이트

https://youtu.be/ldwlOzRvYOU

# 퍼블리싱부터 일단 다 끝내고 다개국어 기능 추가 하자,로컬에 추가하고 url을 파라미터로 접근해서 바뀌게 하고 /ko 이런식으로 하자.

import React, { useState } from "react";
import "./HeadNavigation.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

export default function HeadNavigation() {
const contentByLang = {
ko: { logo: "미스터백", menu: ["소개", "경력", "프로젝트", "연락처"] },
en: { logo: "Mr.Beck", menu: ["About", "Experience", "Projects", "Contact"] },
ja: { logo: "ミスターベック", menu: ["紹介", "経験", "プロジェクト", "連絡"] },
zh: { logo: "贝克先生", menu: ["简介", "经验", "项目", "联系"] }
};

const [lang, setLang] = useState("en");
const { logo, menu } = contentByLang[lang];

const [isShown, setIsShown] = useState(false);
const toggleMenu = () => setIsShown((prev) => !prev);

const 햄버거쇼기능 = {
className: `nav-hamburger ${isShown ? "보임" : "안보임"}`,
onClick: toggleMenu
};

const 닫기링크쇼기능 = {
className: `nav-close ${isShown ? "안보임" : "보임"}`,
onClick: toggleMenu
};

return (
<>
{/_ 🌐 언어 선택 _/}

<div style={{ position: "fixed", top: 10, right: 10 }}>
<button onClick={() => setLang("ko")}>🇰🇷</button>
<button onClick={() => setLang("en")}>🇺🇸</button>
<button onClick={() => setLang("ja")}>🇯🇵</button>
<button onClick={() => setLang("zh")}>🇨🇳</button>
</div>

      {/* 🖥️ 데스크탑 네비게이션 */}
      <nav id="DeskTopNavigation">
        <div className="nav-logo">{logo}</div>
        <ul className="nav-links">
          {menu.map((item, idx) => (
            <li className="nav-links-item" key={idx}>
              <a href={`#section${idx}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 📱 모바일 네비게이션 */}
      <nav id="MobileNavigation">
        <div className="nav-logo">{logo}</div>
        <RxHamburgerMenu {...햄버거쇼기능} />
        <div {...닫기링크쇼기능}>
          <CgClose />
          <ul className="nav-links">
            {menu.map((item, idx) => (
              <li className="nav-links-item" key={idx}>
                <a href={`#section${idx}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>

);
}

나중에 해당 코드 추가하자
