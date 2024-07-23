import React from "react";

import Cards from "../../../components/Cards/Cards";

const Projects = () => {
  return (
    <Cards
      data={[
        {
          url: "https://phenomenal-cactus-c80763.netlify.app/",
          imageUrl: "https://ik.imagekit.io/twsok8jou/Angular-Todo-List.png",
          title: "ToDo Application",
          type: "project",
          description: "Simple ToDo applicaiton using Angular.",
          techs: ["HTML", "CSS", "JS", "Angular"],
          sourceUrl: 'https://github.com/sanjaysaravanan/todo-app-angular'
        },
        {
          url: "https://flourishing-meerkat-370485.netlify.app/",
          imageUrl: "https://ik.imagekit.io/twsok8jou/dashboard.png",
          title: "Graph Generation Tool",
          type: "project",
          description: "Create Charts & Graphs using Excel, CSV & JSON",
          techs: ["HTML", "CSS", "JS", "React", "Python", "Fast-API", "Re-Charts"],
          sourceUrl: 'https://github.com/sanjaysaravanan/dashboard-ui-js'
        }
      ]}
    />
  );
};

export default Projects;
