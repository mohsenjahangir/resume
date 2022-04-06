import React from "react";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <div className="profile-text">
            <div className="imageBox">
              <img src="IMG_20220317_190431_971.jpg" alt="" />
            </div>
            <h2 className="myname">
              MOHSENJAHANGIRI <br />
              <span>web Developer</span>
            </h2>
          </div>
          <div className="contact-info">
            <div className="title">
              <h2>contact info</h2>
            </div>
            <ul>
              <li>
                <span className="icon">
                  <i className="fa fa-yahoo" aria-hidden="true"></i>
                </span>
                <span className="text">Moh7seven@yahoo.com</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </span>
                <span className="text">Mohsenjahangir</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </span>
                <span className="text">Mohsenjahangir</span>
              </li>
              <li>
                <span className="icon">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                <span className="text">+98 936 435 85 06</span>
              </li>
            </ul>
          </div>

          <div className="contact-info education">
            <div className="title">
              <h2>education</h2>
            </div>
            <ul>
              <li>
                <h5>2019-present</h5>
                <h4>law student</h4>
                <h4>payam noor univercity</h4>
              </li>
            </ul>
          </div>
          <div className="contact-info languages">
            <div className="title">
              <h2>languages</h2>
            </div>
            <ul>
              <li>
                <span className="text">ENGLSH</span>
                <span className="percent">
                  {/* <div style={{width: "97%"}}></div> */}
                </span>
              </li>
              <li>
                <span className="text">FARSI</span>
                <span className="percent">
                  {/* <div style={{width: "100%"}}></div> */}
                </span>
              </li>
              <li>
                <span className="text">TURKISH</span>
                <span className="percent">
                  {/* <div style={{width: "80%"}} ></div> */}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="about">
            <h2 className="title2">profile</h2>
            <p>
              Hardworking and enthusiatic frontend developer at React/javascript
              .
              <br />
              Seeking to use my superior knowledge of programming and my
              advanced communication skills to effectively serve your company in
              an internship position .<br />
              dedicated ,hardworking and committed to become a dependable and
              valuable team member{" "}
            </p>
          </div>
          <div className="about">
            <h2 className="title2">experience</h2>
            <p>
               <a href="https://calculator-mohsen.vercel.app/">Calculator!</a><br/><br/><a href="https://online-shop-khaki.vercel.app/">Oline-shop!</a>
               <br/><br/><a href="https://mohsen-resume.netlify.app">Weather!</a><br/><br/><a href="https://mohsen-resume.netlify.app">CV!</a>
            </p>
          </div>

          <div className="about skills">
            <div className="skillsright">
            <h2 className="title2">professional skills</h2>
            <div className="box">
              <h4>HTML</h4>
              <div className="percent2">
                <div style={{width: "100%"}} ></div>
              </div>
            </div>
            <div className="box">
              <h4>css</h4>
              <div className="percent2">
                <div style={{width: "100%"}}></div>
              </div>
            </div>
            <div className="box">
              <h4>javascript</h4>
              <div className="percent2">
                <div style={{width: "100%"}}></div>
              </div>
            </div>
            <div className="box">
              <h4>react-js</h4>
              <div className="percent2">
                <div style={{width: "100%"}}></div>
              </div>
            </div>
            <div className="box">
              <h4>photoshop</h4>
              <div className="percent2">
                <div style={{width: "100%"}}></div>
              </div>
            </div>
            </div>
            <div className="skillsleft">
            <div className="box">
              <h4>Redux-JS</h4>
            </div>
            <div className="box">
              <h4>next-js</h4>
            </div>
            </div>
          </div>
          <div className="about interest">
            <h2 className="title2">interest</h2>
            <ul>
              <li>
                <i className="fa fa-book" aria-hidden="true"></i>Reading
              </li>
              <li>
                <i className="fa fa-suitcase" aria-hidden="true"></i>Travelling
              </li>
              <li>
                <i className="fa fa-safari" aria-hidden="true"></i>Safari
              </li>
              <li>
                <i className="fa fa-internet-explorer" aria-hidden="true"></i>
                Exploring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
