import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Profile.scss";

export default function Profile() {
  const MrBeck = {
    name: "백광일",
    profilePic: "/assets/profile-pic.png",
    pdf: "/assets/resume-example.pdf",
    age: 1991,
    jobs: [
      "IT 개발자ㅊ  ㅍㅊ(CEO) ",
      // "피트니스 인테리어 전문가",
      "크로스핏 체육관 관장"
    ],
    socials: {
      github: {
        icon: "/assets/github.png",
        URL: "https://github.com/leogatsby"
      },
      likedIn: {
        icon: "/assets/linkedIn.png",
        URL: "https://www.linkedin.com/in/%EA%B3%A0%EA%B4%91%EC%9D%BC-8b7a6b1b1/"
      },
      instagram: {}
    }
  };

  return (
    <nav id="Profile">
      <div className="Profile-picture">
        <img src={MrBeck.profilePic} alt="profilePic" />
      </div>
      <div className="Profile-introduce">
        <div className="Profile-introduce-container">
          <div className="strings-container">
            <p className="hello">Hello, I`m</p>
            <h1 className="name">{MrBeck.name}</h1>
            <p className="jobs">
              <Typewriter
                words={MrBeck.jobs.map((job) => `${job} 입니다.`)}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </p>
          </div>
          <p className="tagline">
            {" "}
            IT와 피트니스를 융합한 실행력 있는 창업가입니다.
          </p>
          <div className="btns-container">
            <button
              className="btn btn-1"
              onClick={() => window.open(MrBeck.pdf, "_blank")}
            >
              다운로드 CV
            </button>
            <button
              className="btn btn-2"
              onClick={() => (window.location.href = "/#contact")}
            >
              연락하기
            </button>
          </div>
          <div className="socials-container">
            <img
              src={MrBeck.socials.likedIn.icon}
              onClick={() => window.open(MrBeck.socials.likedIn.URL, "_blank")}
              alt="My LinkedIn Profile"
            />
            <img
              src={MrBeck.socials.github.icon}
              onClick={() => window.open(MrBeck.socials.github.URL, "_blank")}
              alt="My Github Profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
