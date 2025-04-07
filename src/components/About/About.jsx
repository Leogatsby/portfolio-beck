import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div id="About">
      <div className="AboutTitle 텍스트가운데">
        <p>제가 궁금하시나요?</p>
        <h1>About Me</h1>
      </div>
      <div className="AboutBottom">
        <div className="AboutProfilePic">
          <img src="./assets/about-pic.png" alt="프로필 아이콘" />
        </div>
        <div className="AboutContents">
          <div className="AboutCardsContainer">
            <div className="AboutCard 텍스트가운데">
              <img src="./assets/experience.png" alt="" />
              <h3>Experience</h3>
              <p>
                2+ years <br />
                프론트엔드
              </p>
            </div>
            <div className="AboutCard 텍스트가운데">
              <img src="./assets/education.png" alt="" />
              <h3>Education</h3>
              <p>
                B.Sc. Bachelors Degree
                <br />
                M.Sc. Masters Degree
              </p>
            </div>
          </div>
          <p className="AboutContents_Text">
            ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod,
          </p>
        </div>
      </div>
    </div>
  );
}
