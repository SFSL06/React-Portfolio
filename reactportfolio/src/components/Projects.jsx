
import React from "react";
//import { projects } from "../data";

const projects = [
    {
      title: "Work Day Scheduler",
      subtitle: "HTML, CSS Javascript",
      description:
        "An app to organise your day. You can add and delete things to do",
      image: './assets/WorkDayScheduler.jpg',
      link: "https://sfsl06.github.io/Work-Day-Scheduler/",
    },
    {
      title: "Hungry Hub",
      subtitle: "CSS, Javascript, APIs",
      description:
        "An application to help you find good places to eat and check the weather",
      image: './assets/HungryHub.png',
      link: "https://etinago.github.io/hungry-hub-team-3/",
    },
    {
      title: "Weather Dashboard",
      subtitle: "HTML, CSS, Javascript",
      description:
        "Shows daily weather and 5 day weather forecast for a given city",
      image: "./assets/Screenshot_WeatherDashboard.jpg",
      link: "https://sfsl06.github.io/Weather-Dashboard/",
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
            <h1 className="text-center">My Projects</h1>
          
            <div className="row">
                <div className="col-lg-4 mt-4">
                  
                        
                        {/* <img className="card-img-top" src='./assets/HungryHub.png' alt="Card image" style="width:100%"/> */}
                        <div className="card-body">
                      
                            <h4 className="card-title">{projects[0].title}</h4><br/><h5>{projects[0].subtitle}</h5>
                            <p className="card-text">{projects[0].description}</p>
                            <div className="text-center">
                                <a href={projects[0].link} className="btn btn-success">View</a>
                            </div>
                        </div>
                </div>

                <div className="col-lg-4 mt-4">
                  
                        
                  {/* <img className="card-img-top" src='{projects[1].image}' alt="Card image" style="width:100%"/> */}
                  <div className="card-body">
                
                      <h4 className="card-title">{projects[1].title}</h4><br/><h5>{projects[1].subtitle}</h5>
                      <p className="card-text">{projects[1].description}</p>
                      <div className="text-center">
                          <a href={projects[1].link}  className="btn btn-success">View</a>
                      </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-4">
                  
                        
                  {/* <img className="card-img-top" src={projects[2].image} alt="Card image" style="width:100%"/> */}
                  <div className="card-body">
                
                      <h4 className="card-title">{projects[2].title}</h4><br/><h5>{projects[2].subtitle}</h5>
                      <p className="card-text">{projects[2].description}</p>
                      <div className="text-center">
                          <a href={projects[2].link}  className="btn btn-success">View</a>
                      </div>
                  </div>
                </div>
                        
            </div>
     </div>
    </section>
  );
}

export default Projects;

