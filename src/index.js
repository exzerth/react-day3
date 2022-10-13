import React from "react";
import ReactDOM from "react-dom";
import cssImg from "./images/css.png";
import htmlImg from "./images/html.png";
import jsImg from "./images/js.png";
import reactImg from "./images/react.png";
import pfpImg from "./images/pfpImg.jpg";
import verifiedIcon from "./images/verified.png";
import clockIcon from "./images/clock.png";

const main = (
  <main className="fe-container">
    <h3>Front-End Technologies</h3>
    <div className="images">
      <img src={cssImg} alt="css" />
      <img src={htmlImg} alt="html" />
      <img src={jsImg} alt="js" />
      <img src={reactImg} alt="react" />
    </div>
  </main>
)

const contact = (
  <section className="ccc">
    <div className="cc-container">
      <h5>SUBSCRIBE</h5>
      <p className="cc-title">Sign up with your email address to receive news and updates.</p>
      <form action="">
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/>
        <input type="text" placeholder="Email"/> <br />
        <button className="subscribe" type="submit">Subscribe</button>
      </form>
    </div>
  </section>
)

const profile = (
  <section className="profile-container">
    <div className="pp-container">
      <img className="profile-img" src={pfpImg} alt="pfp" />
      <h2>OSINAYA OLUDARE <img className="verified" src={verifiedIcon} alt="verified" /> </h2>
      <p className="job-title">React Developer, Nigeria</p>
      <h4>SKILLS</h4>
      <div className="skills">
        <button className="skill">HTML</button>
        <button className="skill">CSS</button>
        <button className="skill">Sass</button>
        <button className="skill">JS</button>
        <button className="skill">React</button>
        <button className="skill">Redux</button>
        <button className="skill">Node</button>
        <button className="skill">MongoDB</button>
        <button className="skill">Python</button>
        <button className="skill">Flask</button>
        <button className="skill">Django</button>
        <button className="skill">Numpy</button>
        <button className="skill">Pandas</button>
        <button className="skill">Data Analytics</button>
        <button className="skill">MySQL</button>
        <button className="skill">GraphQL</button>
        <button className="skill">D3.js</button>
        <button className="skill">Gatsby</button>
        <button className="skill">Docker</button>
        <button className="skill">Heroku</button>
        <button className="skill">Git</button>
      </div>
      <p className="join"> <img className="clock" src={clockIcon} alt="clock" /> Joined on October, 2022</p>
    </div>
  </section>
)

const app = (
  <div>
    {main}
    {contact}
    {profile}
  </div>
)

const rootElement = document.getElementById("root")

ReactDOM.render(app, rootElement);
