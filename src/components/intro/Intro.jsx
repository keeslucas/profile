import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Over 7 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I love building new things, starting from a blank whiteboard or early stage prototype and transforming it into something people
            truly value. I am full-stack developer with 5+ years of hands-on experience creating microservices, APIs, Desktop Application and
            Web Applications. I am familiar the Microsoft technology stack, including C#, .NET Core, and ASP.NET. I am also familiar with
            microservice architecture and cloud-based solutions (Microsoft Azure). While working in the industrial field, I learned to deliver
            critical software systems (highly available, secure, and fast). I am also a consultant willing to work closely with his clients. I also
            have a great passion for new technology, web development, art (particularly illustration), music (playing guitar and piano), and
            the outdoors. When I’m not on the job, I love hiking with my dog Ziyi, working my way through every recipe in the family
            cookbook, and including my love for seeing new places.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
