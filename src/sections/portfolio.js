import React from "react";
import "../style/portfolio.css";

import Dash from "../components/dash";
import SkillItem from "../components/skillItem";
import ExperienceItem from "../components/experienceItem";
import Project from "../components/project";

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
} from "../images";

import FadeInSection from "../components/fadeInSection";

const Portfolio = () => {
  return (
    <div className="portfolioContainer" id="portfolio">
      <FadeInSection>
        <div className="portfolioContent">
          <div className="portfolioTop">
            <Dash></Dash>
            <div className="portfolioTitle">
              <h1>My portfolio 🎨</h1>
            </div>
          </div>

          <div className="projects">
            <FadeInSection>
              <h2>Projects</h2>

              <div className="projectGrid">
                <Project
                  projectName="Sprout"
                  background={progress}
                  link="/sprout"
                />
                <Project
                  projectName="Tic-Tac-Toe Model"
                  background={progress}
                  link="/ticTacToeModel"
                />
                <Project
                  projectName="This Website!"
                  background={cooking}
                  link="/aboutMyWebsite"
                />
                <Project
                  projectName="Henry's Barbershop"
                  background={barbershop}
                  link="/henrysBarbershop"
                />
                <Project
                  projectName="Theta Tau Website"
                  background={gears}
                  link="/thetaTauWebsite"
                />
                <Project
                  projectName="Predicting CVD"
                  background={heart}
                  link="/predictingCVD"
                />
                <Project
                  projectName="Bitcoin Hash &amp; Miner"
                  background={blockchain}
                  link="/bitcoinHash&amp;Miner"
                />
                <Project
                  projectName="FloWeaver"
                  background={boat}
                  link="/floWeaver"
                />
                <Project
                  projectName="Leetcode"
                  background={leetcode}
                  link="/leetcode"
                />
                <Project
                  projectName="Instagram Unfollowers"
                  background={detective}
                  link="/instagramUnfollowers"
                />
                <Project
                  projectName="Tarot Card Game"
                  background={tarot}
                  link="tarotCardGame"
                />
                <Project
                  projectName="Everglow"
                  background={everglow}
                  link="everglow"
                />
                <Project
                  projectName="Whack-A-Mole"
                  background={moles}
                  link="/whackAMole"
                />
              </div>
            </FadeInSection>
          </div>
          <div className="experience">
            <FadeInSection>
              <h2>Experience</h2>
              <div className="experienceGrid">
                <ExperienceItem
                  position="Software Development Engineer Intern"
                  company="Amazon Web Services"
                  duration="June 2024 - Present"
                  background={seattleSpheres}
                  link="/amazon"
                />
                <ExperienceItem
                  position="Full Stack Software Engineer Intern"
                  company="Cohere Health"
                  duration="January 2024 - Present"
                  background={cohere}
                  link="/cohere"
                />
                <ExperienceItem
                  position="ECE Tutor (C++)"
                  company="UC San Diego ECE Department"
                  duration="September 2023 - December 2023"
                  background={fah}
                  link="/ECETutor"
                />
                <ExperienceItem
                  position="Undergraduate Research Assistant"
                  company="Scripps Institution of Oceanography"
                  duration="August 2023 - September 2023"
                  background={scripps}
                  link="/scripps"
                />
                <ExperienceItem
                  position="Full Stack Software Engineer Intern"
                  company="Viasat"
                  duration="June 2023 - September 2023"
                  background={viasat2}
                  link="/viasat2023"
                />
                <ExperienceItem
                  position="Software Engineer Intern"
                  company="Viasat"
                  duration="June 2022 - September 2022"
                  background={viasat}
                  link="/viasat2022"
                />
                <ExperienceItem
                  position="Software Engineer Intern"
                  company="Palo Verde Generating Station"
                  duration="June 2021 - August 2021"
                  background={aps}
                  link="/paloVerde"
                />
              </div>
            </FadeInSection>
          </div>
          <div className="skills">
            <FadeInSection>
              <h2>Skills</h2>
              <div className="languages">
                <h3>Languages</h3>
                <div className="itemList">
                  <SkillItem term="Python" />
                  <SkillItem term="C / C++" />
                  <SkillItem term="Java" />
                  <SkillItem term="JavaScript" />
                  <SkillItem term="TypeScript" />
                  <SkillItem term="HTML" />
                  <SkillItem term="CSS" />
                  <SkillItem term="SQL" />
                  <SkillItem term="Swift" />
                </div>
              </div>

              <div className="frontend">
                <h3>Front-end</h3>
                <div className="itemList">
                  <SkillItem term="React" />
                  <SkillItem term="Angular" />
                  <SkillItem term="MaterialUI" />
                  <SkillItem term="Tailwind CSS" />
                </div>
              </div>

              <div className="backend">
                <h3>Back-end</h3>
                <div className="itemList">
                  <SkillItem term="Node.js" />
                  <SkillItem term="Express" />
                  <SkillItem term="gRPC" />
                  <SkillItem term="REST" />
                  <SkillItem term="MongoDB" />
                  <SkillItem term="MySQL" />
                  <SkillItem term="PostgreSQL" />
                  <SkillItem term="Firebase" />
                  <SkillItem term="Flask" />
                </div>
              </div>

              <div className="devOps">
                <h3>DevOps</h3>
                <div className="itemList">
                  <SkillItem term="AWS" />
                  <SkillItem term="Azure" />
                  <SkillItem term="Docker" />
                  <SkillItem term="Netlify" />
                  <SkillItem term="Render" />
                </div>
              </div>

              <div className="other">
                <h3>Other Tools</h3>
                <div className="itemList">
                  <SkillItem term="Git" />
                  <SkillItem term="Perforce" />
                  <SkillItem term="Jupyter Notebook" />
                  <SkillItem term="Jenkins" />
                  <SkillItem term="NumPy" />
                  <SkillItem term="TensorFlow" />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Portfolio;
