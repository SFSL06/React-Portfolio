import React from "react";

function About() {
  return (
    
    <section className="bgimage" id="home">
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 className="hero_title">Hi, I'm Sabeen</h2>
                <p className="hero_desc">I love to design and build amazing apps and websites.
                <br/>I have recently completed a front end web development certificate from University of Birmingham.
		          </p>
              <div>
              <a href="#contact">
              Get in touch 
              </a>
              <a href="#projects">
                <br/>View my work
              </a>
              </div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default About;