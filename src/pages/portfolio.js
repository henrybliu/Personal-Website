import React from "react";
import "../style/portfolio.css";

import Dash from "../components/dash";
import SkillItem from "../components/skillItem";
import ExperienceItem from "../components/experienceItem";
import Project from "../components/project";

import progress from "../images/progress.png";
import detective from "../images/detective.png";
import barbershop from "../images/barbershop.png";
import leetcode from "../images/leetcode.png";
import everglow from "../images/everglow.png";
import blockchain from "../images/blockchain.png";
import moles from "../images/moles.png";
import cooking from "../images/cooking.png";
import tarot from "../images/tarot.png";
import heart from "../images/heart.png";
import gears from "../images/gears.png";
import boat from "../images/boat.png";

import cohere from "../images/cohere.png";
import fah from "../images/fah.png";
import scripps from "../images/scripps.png";
import aps from "../images/aps.png";
import viasat from "../images/viasat.png";
import viasat2 from "../images/viasat2.png";

const Portfolio = () => {
  return (
    <div className="portfolioContainer" id="portfolio">
      <div className="portfolioContent">
        <div className="portfolioTop">
          <Dash></Dash>
          <div className="portfolioTitle">
            <h1>🎨 My portfolio</h1>
          </div>
        </div>

        <div className="projects">
          <h2>Projects</h2>
          <div className="projectGrid">
            <Project projectName="Sprout" background={progress} />
            <Project projectName="Tic-Tac-Toe Model" background={progress} />
            <Project projectName="This Website!" background={cooking} />
            <Project projectName="Henry's Barbershop" background={barbershop} />
            <Project projectName="Theta Tau Website" background={gears} />
            <Project projectName="Predicting CVD" background={heart} />
            <Project
              projectName="Bitcoin Hash &amp; Miner"
              background={blockchain}
            />
            <Project projectName="FloWeaver" background={boat} />
            <Project projectName="Leetcode" background={leetcode} />
            <Project
              projectName="Instagram Unfollowers"
              background={detective}
            />
            <Project projectName="Tarot Card Game" background={tarot} />
            <Project projectName="Everglow" background={everglow} />
            <Project projectName="Whack-A-Mole" background={moles} />
          </div>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="experienceGrid">
            <ExperienceItem
              position="Full Stack Software Engineer Intern"
              company="Cohere Health"
              duration="January 2024 - Present"
              background={cohere}
            />
            <ExperienceItem
              position="ECE Tutor (C++)"
              company="UC San Diego ECE Department"
              duration="September 2023 - December 2023"
              background={fah}
            />
            <ExperienceItem
              position="Undergraduate Research Assistant"
              company="Scripps Institution of Oceanography"
              duration="August 2023 - September 2023"
              background={scripps}
            />
            <ExperienceItem
              position="Full Stack Software Engineer Intern"
              company="Viasat"
              duration="June 2023 - September 2023"
              background={viasat2}
            />
            <ExperienceItem
              position="Software Engineer Intern"
              company="Viasat"
              duration="June 2022 - September 2022"
              background={viasat}
            />
            <ExperienceItem
              position="Software Engineer Intern"
              company="Palo Verde Generating Station"
              duration="June 2021 - August 2021"
              background={aps}
            />
          </div>
        </div>
        <div className="skills">
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
