/* eslint-disable no-undef */
import React, { useRef, useState } from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Button, Col, Container } from 'react-bootstrap';

import hero from "./assets/hero-image.svg";
import sign from "./assets/signature.svg";

import b4ndisplay from "./assets/b4n-display.png";
import ppdisplay from "./assets/pp-display.png";
import cbdisplay from "./assets/cb-display.png";
import rcdisplay from "./assets/rc-display.png";
import zulipdisplay from "./assets/zulip-display.png";
import uberdisplay from "./assets/uber-display.png";

import gsoc from "./assets/gsoc-mini.svg";
import rc from "./assets/rc-mini.svg";
import zulip from "./assets/zulip-mini.svg";
import uber from "./assets/uber-mini.svg";
import parc from "./assets/parc-mini.svg";
import b4n from "./assets/b4n-mini.svg";

import gsoctrophy from "./assets/gsoc-trophy.png";
import rctrophy from "./assets/rc-trophy.png";
import zuliptrophy from "./assets/zulip-trophy.png";
import gitcointrophy from "./assets/gitcoin-trophy.png";
import adtrophy from "./assets/ad-trophy.png";
import github from "./assets/github.svg";

import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

initFirebase();
firebase.analytics();

const projectInfo = [
  {
    title: "Blood4Needy",
    stack: "MongoDB, Express, React & NodeJS",
    description1: "Blood4Needy is a platform where people can donate and request blood and plasma for free. It connects Blood and Plasma Donors with the people who are in need of blood anytime, anywhere.",
    description2: "The aim is to bridge the gap between Needy and Donor through technology by providing them a transparent platform to donate blood.",
    features: [
      "Create an account instantly by giving your basic details - [Message91 OTP API]",
      "Request Form to raise any blood request - [Twillio SendGrid API]",
      "Map View of the available donors at their exact location - [Google Maps API]",
      "List View to go through the available donors with ease.",
      "Live Feed to update the users about any events happening around them.",
      "Blood Requests section for donors to help those in need.",
      "Admin Panel to control the users and requests."
    ],
    link: "https://www.blood4needy.com"
  },
  {
    title: "Checktober",
    stack: "React & GitHub API",
    description1: "Checktober helps check your (or anyone's) Hacktoberfest progress without the need of authentication. It also shows you the available issues to contribute under hacktoberfest.",
    description2: "The official Hacktoberfest website already shows your progress but it requires authentication and that's the benefit of Checktober. Check how your competitors are doing!",
    features: [
      "Hassle free! No login or authentication required.",
      "Beautiful Hacktoberfest inspired theme.",
      "Check anyone's (your competitors') progress too!",
      "View issues filtered as per your preferences and start contributing.",
    ],
    link:"https://checktober.web.app"
  },
  {
    title: "PaperPlane",
    stack: "React & Firebase",
    description1: "PaperPlane helps you remove all those space-consuming bookmarks and fly directly to your scheduled meeting online. All you have to do is set your schedule for one last time.",
    description2: "It started as an idea when I was getting bored of bookmarking each and every lecture during online classes and thought of automating the process 'cause we developers are lazy!",
    features: [
      "Login instantly with Google Sign-In.",
      "Colorful (Google-inspired) UI to set your schedule.",
      "Redirect to your scheduled meet using a single link",
      "View your upcoming lectures on the home screen",
    ],
    link:"https://paper-planeee.web.app"
  },
  {
    title: "Rocket.Chat",
    stack: "MongoDB, Meteor, React & NodeJS",
    description1: "Rocket.Chat is an open-source fully customizable communications platform developed in JavaScript for organizations with high standards of data protection.",
    description2: "It is a MERN based application enabling real-time conversations between colleagues, with other companies or with your customers, regardless of how they connect with eachother resulting in an increase in productivity and satisfaction.",
    link:"https://github.com/search?q=type:pr+author:im-adithya+repo:RocketChat/Rocket.Chat"
  },
  {
    title: "Zulip Mobile",
    stack: "React & Firebase",
    description1: "Zulip is a powerful, open source group chat application that combines the immediacy of real-time chat with the productivity benefits of threaded conversations.",
    description2: "It is used by open source projects, Fortune 500 companies, large standards bodies, and others who need a real-time chat system that allows users to easily process hundreds or thousands of messages a day.",
    link: "https://github.com/search?q=type%3Apr+author%3Aim-adithya+repo%3Azulip%2Fzulip-mobile+repo%3Azulip%2Fzulip"
  },
  {
    title: "Uber BaseWeb",
    stack: "React",
    description1: "Base is a design system comprised of modern, responsive, living components. Base Web is the React implementation of Base. It is a foundation for initiating, evolving, and unifying web products.",
    description2: "BaseWeb offers a robust suite of components out of the box. These include complex, ready-to-use components such as Datepicker and low-level composable primitives, such as Layer.",
    link: "https://github.com/search?q=type%3Apr+author%3Aim-adithya+repo%3Auber%2Fbaseweb"
  },

]

function App() {
  const [project, setProject] = useState(0);
  const contactRef = useRef(null);

  const pictureFetcher = () => {
    switch (project) {
      case 0:
        return b4ndisplay;
      case 1:
        return cbdisplay;
      case 2:
        return ppdisplay;
      case 3:
        return rcdisplay;
      case 4:
        return zulipdisplay;
      case 5:
        return uberdisplay;
    }
  }

  return (
    <div className="App">
      <div className="hero-container">
        <Container>
          <nav className="navibar d-flex flex-row justify-content-between">
            <img src={sign} alt="signature" width="150px" className="ml-2 ml-md-0"/>
            <a href="https://drive.google.com/file/d/1zRLI40KZVda2KI47WluOTk1F11nkxF4a/view?usp=sharing" target="_blank" rel="noreferrer" ><Button className="button-2 button-resume d-flex flex-row"><span className="d-none d-lg-block d-xl-block">Download&nbsp;</span>Resume</Button></a>
          </nav>
          <Row className="align-items-center mt-5 pt-5">
            <Col xs={{span: 11, offset:1}} lg={{ span: 6, offset: 1 }}>
              <h1 className="hero-text-1">Hello there!<br />I&apos;m <span className="text-animation-1">Adithya</span>.</h1>
              <p className="hero-text-3 mb-0">I&apos;m a</p>
              <div>
                <h2 className="hero-text-2 text-animation-2">
                  Web Developer,<br />
                  Graphic Designer,<br />
                  Illustrator.
                </h2>
              </div>
              <Button variant="success" className="button-1 mt-4" onClick={() => { contactRef.current.scrollIntoView({ behavior: "smooth" }); }}>&lt;Get In Touch/&gt;</Button>
            </Col>
            <Col lg={4} className="d-flex flex-column mt-5 mt-md-0 justify-content-center align-items-center hero">
              <img src={hero} alt="hero-image" className="ml-3 hero-image float mt-5 mt-md-0" />
            </Col>
          </Row>
        </Container>
        <div className="chevron-holder position-absolute start-50 d-none d-lg-block d-xl-block">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
      <Container>
        <Row className="d-flex mx-auto position-relative about-bg">
          <Col xs={12} lg={8} className="p-3 py-md-5 px-md-4 mx-lg-3">
            <div className="d-block d-sm-none about-filler"></div>
            <h2 className="mb-4 about-text-header" >About Me</h2>
            <p className="about-text">Hello there! My name is Adithya Vardhan and I enjoy learning and building new stuff. My interest in web-dev started in 2020 when I came across freeCodeCamp&apos;s full-stack curriculum. From then it was an amazing journey into the world of JavaScript.</p>
            <p className="about-text">Besides that I&apos;m proficient in Graphic Designing, Making Illustrations and Drawing Portraits. I also started contributing to Open Source (both Design and Web-Dev) and I wish to become a Software Developer at a Big-Tech Company.</p>
          </Col>
        </Row>
        <div className="projects px-2 px-md-3 px-lg-5">
          <div className="d-flex flex-row align-items-center pt-3 pt-md-4 pt-lg-5 pb-3">
            <h2 className="project-text-1 text-animation-1 ml-2 ml-md-0 mb-0 mr-4 mr-md-5">Projects &<br />Contributions</h2>
            <div className="d-flex flex-row overflow-scroll project-titles w-100">
              <div onClick={() => setProject(0)} className={project === 0 ? "active-title-1" : ""} >Blood4Needy</div>
              <div onClick={() => setProject(1)} className={project === 1 ? "active-title-1" : ""} >Checktober</div>
              <div onClick={() => setProject(2)} className={project === 2 ? "active-title-1" : ""} >PaperPlane</div>
              <div onClick={() => setProject(3)} className={project === 3 ? "active-title-2" : ""} >Rocket.Chat / RocketChat</div>
              <div onClick={() => setProject(4)} className={project === 4 ? "active-title-2" : ""} >Zulip / Zulip-Mobile</div>
              <div onClick={() => setProject(5)} className={project === 5 ? "active-title-2" : ""} >Uber / BaseWeb</div>
            </div>
          </div>
          <Row className="align-items-center transition">
            <Col xs={12} lg={6}>
              <img src={pictureFetcher()} width="100%" alt="b4n-display" />
            </Col>
            <Col className="p-4">
              <div className={"project-text-2 project-" + (project + 1)}>{projectInfo[project].title}</div>
              <div className="text-animation-1 project-text-3 mb-2">TechStack: <span className="project-text-4">{projectInfo[project].stack}</span></div>
              <div className="project-text-5 mb-3">{projectInfo[project].description1}<span className={"project-" + (project + 1) + "-span"}> {projectInfo[project].description2}</span>
              </div>
              <a href={projectInfo[project].link} target="_blank" rel="noreferrer" ><Button className={"button-2 project-" + (project + 1) + "-btn"}>{project > 2 ? "View Contributions >" : "Visit Website >"}</Button></a>
            </Col>
          </Row>
          {project < 3 && <div className="px-2 px-md-3 px-lg-0">
            <div className="project-text-6 text-animation-3">Features</div>
            <div className="project-text-7">
              {projectInfo[project].features.map((feat, index) => {
                return (<p key={index}>• {feat}</p>)
              })}
            </div>
          </div>}
          <div className="mt-5 px-md-2 px-lg-5">
            <div className="text-center text-animation-2 xp-text-1 mb-5">Work Experience</div>

            <div className="d-flex flex-row align-items-center">
              <img src={gsoc} width="50px" alt="gsoc" className="p-2 my-2" />
              <h3 className="ml-3 xp-text-2 mb-0">Student Developer @ <span className="text-animation-3">Google Summer of Code&apos;21</span></h3>
            </div>
            <div className="xp-box">
              <p className="xp-text-3 mt-2">Jun 2021 - Aug 2021</p>
              <div className="xp-text-4">
                <p>• Worked on Channels Discovery Project to add social aspects to channels.</p>
                <p>• Built a new feature (adding Tags) for channels in servers to increase visibility.</p>
                <p>• Developed REST APIs to fetch and sort Trending and Recommended channels.</p>
                <p>• Implemented MongoDB methods which efficiently go through 18000+ channels.</p>
                <p>• Developed a whole new screen called Channels Discovery to display channels.</p>
                <p><a href="https://im-adithya.github.io/gsoc/" target="_blank" rel="noreferrer" className="link text-animation-3">Click Here</a> for a detailed video presentation.</p>
              </div>
            </div>

            <div className="mt-3 d-flex flex-row align-items-center">
              <img src={rc} width="50px" alt="rc" className="p-2 my-2" />
              <h3 className="ml-3 xp-text-2 mb-0">Open Source Contributor @ <span className="project-4">Rocket.Chat</span></h3>
            </div>
            <div className="xp-box">
              <p className="xp-text-3 mt-2">Mar 2021 - Apr 2021</p>
              <div className="xp-text-4">
                <p>• Worked on the main and fuselage repositories.</p>
                <p>• Contributed to 30+ issues and bug fixes.</p>
                <p>• Stood in the top 10 contributors of Rocket.Chat.</p>
                <p>• Implemented new features and made crucial bug fixes in fuselage components.</p>
                <p>• Been selected as a student contributor for GSoC&apos;21</p>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center">
              <img src={zulip} width="50px" alt="zulip" className="p-2 my-2" />
              <h3 className="ml-3 xp-text-2 mb-0">Open Source Contributor @ <span className="project-5">Zulip, Inc.</span></h3>
            </div>
            <div className="xp-box">
              <p className="xp-text-3 mt-2">Feb 2021 - Apr 2021</p>
              <div className="xp-text-4">
                <p>• Worked on the mobile repository of Zulip.</p>
                <p>• Implemented shell scripts to automate the debug-app icon generation.</p>
                <p>• Contributed to about 20% of navigation and layout issues in the repository.</p>
                <p>• Resolved 2 major webview errors which aided the development process.</p>
              </div>
            </div>

            <div className="mt-3 d-flex flex-row align-items-center">
              <img src={uber} width="50px" alt="uber" className="p-2 my-2" />
              <h3 className="ml-3 xp-text-2 mb-0">Open Source Contributor @ <span className="project-6">Uber</span></h3>
            </div>
            <div className="xp-box">
              <p className="xp-text-3 mt-2">Sep 2021</p>
              <div className="xp-text-4">
                <p>• Worked on the baseweb repository.</p>
                <p>• Contributed to 10+ issues and bug fixes.</p>
                <p>• Added examples in documentation for components.</p>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center">
              <img src={b4n} width="50px" alt="b4n" className="p-2 my-2" />
              <h3 className="ml-3 xp-text-2 mb-0">Freelance FullStack Developer @ <span className="project-1">Blood4Needy</span></h3>
            </div>
            <div className="xp-box">
              <p className="xp-text-3 mt-2">Mar 2021 - Apr 2021</p>
              <div className="xp-text-4">
                <p>• Built the full-stack web application for blood donation and launched to 700+ users.</p>
                <p>• Helped raise and fulfill more than 100+ requests for blood and plasma.</p>
                <p>• Implemented Google Maps API to track donors and SendGrid API to send emails.</p>
                <p>• Hosted the web-app on Nginx server along with a custom CI/CD pipeline.</p>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center">
              <img src={parc} width="50px" alt="parc" className="p-2 my-2" />
              <h3 className="ml-3 xp-text-2 mb-0">Graphic Designer @ <span className="project-3">PARC</span></h3>
            </div>
            <div className="xp-box">
              <p className="xp-text-3 mt-2">Jun 2021 - Jul 2021</p>
              <div className="xp-text-4">
                <p>• Part of Practice School in BITS Pilani.</p>
                <p>• Worked on the preparation of Annual Report.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="flex-text-1 text-animation-2 text-center mb-0">Hall of Fame</div>
          <div className="flex-text-2 text-center">My Achievements</div>
          <div className="trophy-flex-box d-flex flex-wrap mt-5 px-3 px-md-5">
            <img src={gsoctrophy} alt="gsoc-trophy" />
            <img src={zuliptrophy} alt="zulip-trophy" />
            <img src={rctrophy} alt="rc-trophy" />
            <img src={gitcointrophy} alt="gitcoin-trophy" />
            <img src={adtrophy} alt="ad-trophy" />
          </div>
        </div>

        <Row className="d-flex mx-auto position-relative contact-bg" ref={contactRef}>
          <Col xs={10} md={8} className="py-3 px-2 py-md-5 px-md-4 mx-3">
            <h2 className="mb-4 contact-text-header text-animation-1">Get In Touch</h2>
            <p className="contact-text-2 mb-4">I&apos;m actively looking for Summer Internships (both remote and on-site). Wanna Help?<br />Here&apos;s my email:</p>
            <span className="contact-text-3 text-animation-3 p-2">imadithyavardhan@gmail.com</span>
            <div className="contact-text-4 mt-4">
              Adithya Vardhan,<br />
              GN 2101, BITS Pilani,<br />
              Pilani, Jhunjhunu,<br />
              Rajasthan, India - 333031
            </div>
          </Col>
        </Row>
      </Container >
      <div className="footer">
        <Container>
          <div className="d-flex flex-row align-items-center justify-content-between">
            <img src={sign} alt="signature" className="p-3 footer-sign" />
            <div className="d-flex flex-row align-items-center">
              <p className="footer-text-1 mb-0">Inspired by</p>
              <img src={github} alt="signature" width="60px" className="p-3" />
            </div>
          </div>
        </Container>
      </div>
    </div >
  );
}

export default App;
