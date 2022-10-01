import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/home.css";

import React from "react";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Pedro</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ol className="list">
          <li className="item">
            <h3>Front-end</h3>
            <span>ReactJs, Angular, Redux, HTML, CSS, React Native, Bootstrap, MaterialUI, Yarn, Tailwindcss</span>
          </li>
          <li className="item">
            <h3>Back-end</h3>
            <span>MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>TypeScript, JavaScript </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
