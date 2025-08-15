import React from "react";
import Card from "./Card";

const projects = [
  {
    name: "Robot Project",
    description:
      "As part of my engineering coursework at the University of Indianapolis, my team and I designed and built a functional robot that evolved through three key milestones. The first milestone was developing a manually controlled robot. For the second milestone, we hard-coded the Arduino to enable autonomous movement. The final milestone integrated IR and ultrasonic sensors, allowing the robot to navigate its environment intelligently. This project enhanced my skills in mechanical design, electronics, programming, and collaborative problem-solving.",
    summary:
      "A three-stage robotics project with manual control, Arduino automation, and sensor-based navigation.",
    link: "https://drive.google.com/drive/folders/1MFwJC28DzE8BrPYxw55DRVAA2DAaN-Ro?usp=share_link"
  },
  {
    name: "Air Pollution Sensor",
    description:
      "This project was done in my 2nd engineering class and it involved designing a sensor for monitoring air quality in real time. Although our group never built the actual product, we carried out various tests and simulations to validate our design, and its efficacy is supported by the data we collected.",
    summary:
      "An IoT-based sensor system for real-time air quality monitoring and data visualization.",
    link: "https://drive.google.com/drive/folders/1uJg4PPfjij3G1dI6vU-yfhJJAj9TDZGo?usp=share_link"
  }
];

const Projects = () => (
  <Card>
    <h2 className="text-2xl font-bold mb-2">Projects</h2>
    <ul>
      {projects.map(project => (
        <li key={project.name} className="mb-4">
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} className="text-blue-500 underline">
              View Project
            </a>
          )}
        </li>
      ))}
    </ul>
  </Card>
);

export default Projects;