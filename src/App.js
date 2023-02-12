import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resume</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <div className="container">
        <div className="left-side">
          <div className="profile-text">
            <div className="imageBox">
              <img src="mohsen.png" alt="" />
            </div>
            <h2 className="myname">
              MOHSENJAHANGIRI <br />
              <span>front-end developer react js</span>
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
                <h5>2019-2022</h5>
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
                <span className="text">FARSI</span>
                <span className="percent">
                  {/* <div style={{width: "97%"}}></div> */}
                </span>
              </li>
              <li>
                <span className="text">ENGLISH</span>
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
            <h2 className="title2">summary</h2>
            <p>
              Creative and versatile Front-end Developer leveraging JavaScript to build responsive websites,interactive features,managing complex e-commerce sites and internal frameworks that drive business growth
            </p>
          </div>
          <div className="about">
            <h2 className="title2">experience</h2>
            <p>
              <h5 className="text-title">Freelance:</h5>
              <a className="btn btn-outline-secondary" href="https://commerce-nextjs-3f9t.vercel.app/">E-COMMERCE (nextjs) sample!</a ><br /><br />
              <a className="btn btn-outline-secondary" href="https://online-market-nine.vercel.app/">E-COMMERCE (React js) sample!</a ><br /><br />
              <a className="btn btn-outline-secondary" href="https://calculator-mohsen.netlify.app/">Calculator sample!</a >
              <br /><br /><a className="btn btn-outline-secondary" href="https://mohsen-weather.netlify.app/">Weather sample!</a >
            </p>
          </div>

          <div className="about skills">
            <div className="skillsright">
              <h2 className="title2">professional skills</h2>
              <div className="box">
                <h4>HTML</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }} ></div>
                </div>
              </div>
              <div className="box">
                <h4>css/Tailwind</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>material/Ui</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>bootstrapt</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>responsive/design</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>javascript</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>typescript</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>React-JS</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>Next-JS</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>redux</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>API</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>QraphQL</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
              <div className="box">
                <h4>Git</h4>
                <div className="percent2">
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
            <div className="skillsleft">
              {/* <div className="box">
                <h4>Tailwind CSS</h4>
              </div> */}
              {/* <div className="box">
                <h4>api</h4>
              </div> */}
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
