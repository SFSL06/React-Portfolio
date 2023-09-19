
import React from "react";
//import { projects } from "../data";

const projects = [
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-1.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-2.gif",
      link: "https://reedbarger.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-3.gif",
      link: "https://jsbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-4.gif",
      link: "https://pythonbootcamp.com",
    },
  ];
function Projects () {

    // src/components/Projects.js
  return (
    <section id="projects">
     <div className="container mt-3">
            <h1 className="text-center">My Apps/Projects</h1>
          
              <div className="row">
                <div className="col-lg-4 mt-4">
                    <div className="card">
                        
                        {/* <img className="card-img-top" src={projects[0].image} alt="Card image" style="width:100%"/> */}
                        <div className="card-body">
                            <h4 className="card-title">{projects[0].title}<br/>{projects[0].subtitle}</h4>
                            <p className="card-text">{projects[0].description}</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        
      </div>
    </section>
  );
}

export default Projects;

