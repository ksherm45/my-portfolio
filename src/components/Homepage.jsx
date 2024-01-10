import React, { useEffect } from "react";
import ProfilePic from "../images/ProfilePic.jpg";
import { SocialIcon } from "react-social-icons";
import Kajio from "../images/Kajio.PNG";
import DDD from "../images/DDD.PNG";
import Neo from "../images/neo.jpeg";
import PortfolioPic from "../images/PortfolioPic.PNG";
import { Link } from "react-router-dom";

function Homepage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElements1 = document.querySelectorAll(".hidden1");
    hiddenElements1.forEach((el) => observer.observe(el));

    return () => {
      // Clean up the observer on component unmount
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements1.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures the effect runs once on mount
  return (
    <div>
      <h1 className="title">Kaj Sherman's Portfolio!</h1>
      <div className="Profile">
        {" "}
        <img src={ProfilePic} alt="Profile Pic" />
      </div>

      <section className="hidden1" id="info">
        <p className="icon hidden1">
          👋 Hello! I'm a Junior MERN Full Stack Developer with a unique
          background in sports. My journey into web development is fueled by an
          obsession with peak output. Proficient in Javascript (ES6), MongoDB,
          Express, React, NodeJS, SQL, HTML, CSS, and GitHub, I bring a
          versatile skill set to the table.
        </p>
        <br></br>
        <p className="icon hidden1">
          💻 My interest lies in merging elite sports with emerging technology,
          creating user-friendly platforms for efficient information access and
          delivery. Beyond coding, I'm committed to crafting solutions that
          bridge the gap between different domains. Let's explore the
          possibilities where my skills as a Full Stack MERN Web Developer meet
          my passion for innovation.
        </p>
      </section>

      <section className="hidden" id="projects">
        <div className="Projects">
          <div className="thumbnail icon hidden">
            <div className="title"> Kajio </div>
            <img src={Kajio} alt="Kajio Pic" />

            <p className="ProjectDesc">
              A full stack application using handlebars and MongoDB. It
              replicates twitter with a added touch of randomness.{" "}
            </p>
            <div className="flex">
              <a href="https://github.com/JohannesSattler/Kajio">
                <button className="button" id="neon">
                  Code
                </button>
              </a>
              <button className="button" id="neon">
                App
              </button>
            </div>
          </div>

          <div className="thumbnail icon hidden">
            <div className="title">Door Dash Derby! </div>
            <img src={DDD} alt="DDD Pic" />
            <p className="ProjectDesc">
              A basic X & Y axis collision game made with Javascript, HTML and
              CSS. Open with a live server in VS Code.{" "}
            </p>

            <div className="flex">
              <a href="https://github.com/ksherm45/Door-Dash-Derby">
                <button className="button" id="neon">
                  Code
                </button>
              </a>
              <a href="https://doordashderby.netlify.app">
                <button className="button" id="neon">
                  App
                </button>
              </a>
            </div>
          </div>

          <div className="thumbnail icon hidden">
            <div className="title">My Portfolio </div>
            <img src={Neo} alt="DDD Pic" />
            <p className="ProjectDesc">
              A behind the scenes look at what you are seeing now! Take a look
              at the bonus page nestled at the bottom.{" "}
            </p>

            <div className="flex">
              <a href="https://github.com/ksherm45/my-portfolio">
                <button className="button" id="neon">
                  Code
                </button>
              </a>
              {/* <button className="button" id="neon">
                App
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden" id="contact">
        <div className="iconContainer hidden">
          <SocialIcon
            url="https://www.linkedin.com/in/kaj-bjoern-sherman/"
            className="icon hidden"
            target="_blank"
            fgColor="#fff"
            style={{ height: 95, width: 95 }}
          />

          <SocialIcon
            url="https://github.com/ksherm45"
            className="icon hidden"
            target="_blank"
            fgColor="#fff"
            style={{ height: 95, width: 95 }}
          />

          <SocialIcon
            url="https://www.instagram.com/ksherm45/"
            className="icon hidden"
            target="_blank"
            fgColor="#fff"
            style={{ height: 95, width: 95 }}
          />
        </div>
      </section>
      <div className="matrixx">
        <Link to="/matrix">
          <button className="matrix">follow the white rabbit neo</button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
