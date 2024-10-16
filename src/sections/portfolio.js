import React from "react";
import "../style/portfolio.css";

import {
  Dash,
  SkillItem,
  ExperienceItem,
  Project,
  FadeInSection,
} from "../components";

import {
  progress,
  detective,
  barbershop,
  leetcode,
  everglow,
  blockchain,
  moles,
  cooking,
  tarot,
  heart,
  gears,
  boat,
  seattleSpheres,
  cohere,
  fah,
  scripps,
  aps,
  viasat,
  viasat2,
  jester,
} from "../images";

const projectItems = [
  { projectName: "Sprout", background: progress, link: "/sprout" },
  {
    projectName: "Tic-Tac-Toe Model",
    background: progress,
    link: "/ticTacToeModel",
  },
  { projectName: "Games with AI", background: jester, link: "/AIGames" },
  {
    projectName: "This Website!",
    background: cooking,
    link: "/aboutMyWebsite",
  },
  {
    projectName: "Henry's Barbershop",
    background: barbershop,
    link: "/henrysBarbershop",
  },
  {
    projectName: "Theta Tau Website",
    background: gears,
    link: "/thetaTauWebsite",
  },
  { projectName: "Predicting CVD", background: heart, link: "/predictingCVD" },
  {
    projectName: "Bitcoin Hash & Miner",
    background: blockchain,
    link: "/bitcoinHash&miner",
  },
  { projectName: "FloWeaver", background: boat, link: "/floWeaver" },
  { projectName: "Leetcode", background: leetcode, link: "/leetcode" },
  {
    projectName: "Instagram Unfollowers",
    background: detective,
    link: "/instagramUnfollowers",
  },
  { projectName: "Tarot Card Game", background: tarot, link: "/tarotCardGame" },
  { projectName: "Everglow", background: everglow, link: "/everglow" },
  { projectName: "Whack-A-Mole", background: moles, link: "/whackAMole" },
];

const experienceItems = [
  {
    position: "Software Development Engineer Intern",
    company: "Amazon Web Services",
    duration: "June 2024 - September 2024",
    background: seattleSpheres,
    link: "/amazon",
  },
  {
    position: "Full Stack Software Engineer Intern",
    company: "Cohere Health",
    duration: "January 2024 - June 2024",
    background: cohere,
    link: "/cohere",
  },
  {
    position: "ECE Tutor (C++)",
    company: "UC San Diego ECE Department",
    duration: "September 2023 - December 2023",
    background: fah,
    link: "/ECETutor",
  },
  {
    position: "Undergraduate Research Assistant",
    company: "Scripps Institution of Oceanography",
    duration: "August 2023 - September 2023",
    background: scripps,
    link: "/scripps",
  },
  {
    position: "Full Stack Software Engineer Intern",
    company: "Viasat",
    duration: "June 2023 - September 2023",
    background: viasat2,
    link: "/viasat2023",
  },
  {
    position: "Software Engineer Intern",
    company: "Viasat",
    duration: "June 2022 - September 2022",
    background: viasat,
    link: "/viasat2022",
  },
  {
    position: "Software Engineer Intern",
    company: "Palo Verde Generating Station",
    duration: "June 2021 - August 2021",
    background: aps,
    link: "/paloVerde",
  },
];

const skillItems = {
  languages: [
    "Python",
    "C / C++",
    "Java",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SQL",
    "Swift",
    "Groovy",
  ],
  frontend: ["React", "Angular", "MaterialUI", "Tailwind CSS"],
  backend: [
    "Node.js",
    "Express",
    "gRPC",
    "REST",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Flask",
  ],
  infrastructure: ["AWS", "Azure", "Docker", "Netlify", "Render"],
  other: [
    "Git",
    "Perforce",
    "Jupyter Notebook",
    "Jenkins",
    "NumPy",
    "TensorFlow",
    "Sentry",
    "Kibana",
  ],
};

const Portfolio = () => {
  return (
    <div className="portfolioContainer" id="portfolio">
      <FadeInSection slide={true}>
        <div className="portfolioContent">
          <div className="portfolioTop">
            <Dash></Dash>
            <div className="portfolioTitle">
              <h1>My portfolio 🎨</h1>
            </div>
          </div>

          <div className="projects">
            <FadeInSection slide={true}>
              <h2>Projects</h2>

              <div className="projectGrid">
                {projectItems.map((project, index) => (
                  <Project
                    key={index}
                    projectName={project.projectName}
                    background={project.background}
                    link={project.link}
                  />
                ))}
              </div>
            </FadeInSection>
          </div>

          <div className="experience">
            <FadeInSection slide={true}>
              <h2>Experience</h2>
              <div className="experienceGrid">
                {experienceItems.map((experience, index) => (
                  <ExperienceItem
                    key={index}
                    position={experience.position}
                    company={experience.company}
                    duration={experience.duration}
                    background={experience.background}
                    link={experience.link}
                  />
                ))}
              </div>
            </FadeInSection>
          </div>

          <div className="skills">
            <FadeInSection slide={true}>
              <h2>Skills</h2>
              {Object.keys(skillItems).map((category) => (
                <div key={category} className={category}>
                  <h3>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="itemList">
                    {skillItems[category].map((skill, index) => (
                      <SkillItem key={index} term={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
