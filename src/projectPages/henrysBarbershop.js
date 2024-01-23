import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const HenrysBarbershop = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Henry's Barbershop</h1>
        <h2>
          <a
            href="https://henrysbarbershop.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            henrysbarbershop.netlify.app/
          </a>
        </h2>
        <h2>
          <a
            href="https://github.com/henrybliu/Henry-s-Barbershop"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Henry-s-Barbershop
          </a>
        </h2>
        <h3>About the project</h3>
        <p>
          I enjoy cutting hair as a hobby. Frequently, friends and classmates
          approach me for haircuts. To simplify the appointment scheduling
          process and broaden my client base, I developed this application!
        </p>
        <p style={{ marginTop: "15px" }}>
          This tool addresses previous challenges of slow communication through
          text messages and social media. Now, clients can effortlessly view my
          availability, choose slots, explore my past work, and provide
          feedback.
        </p>
        <p style={{ marginTop: "15px" }}>
          Thanks to this application, my once modest business, serving around 15
          regulars, has expanded to over 50 clients! You might even find
          recommendations for my barber services on the UC San Diego subreddit.
          Act fast—book your slot before they're all taken!
        </p>
        <h3> Project tech stack</h3>

        <p>Frontend</p>
        <li>React</li>
        <li>JavaScript</li>
        <li>Axios</li>
        <li>HTML</li>
        <li>CSS</li>
        <p>Backend</p>
        <li>MongoDB Cloud</li>
        <li>Node.js</li>
        <li>Express</li>
        <p>DevOps</p>
        <li>Netlify</li>
        <li>Render</li>

        <h3>Reddit posts I've found about me!</h3>
        <li>
          <a
            href="https://www.reddit.com/r/UCSD/comments/qi6846/any_student_barbers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.reddit.com/r/UCSD/comments/qi6846/any_student_barbers/
          </a>
        </li>
        <li>
          <a
            href="https://www.reddit.com/r/UCSD/comments/uj416e/any_barbers_on_campus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.reddit.com/r/UCSD/comments/uj416e/any_barbers_on_campus/
          </a>
        </li>
        <li>
          <a
            href="https://www.reddit.com/r/UCSD/comments/poc4sa/do_people_cut_their_hair_in_the_dorms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.reddit.com/r/UCSD/comments/poc4sa/do_people_cut_their_hair_in_the_dorms/
          </a>
        </li>
        <li>
          <a
            href="https://www.reddit.com/r/UCSD/comments/17cwdfn/asian_barber/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.reddit.com/r/UCSD/comments/17cwdfn/asian_barber/{" "}
          </a>
        </li>
      </div>
    </div>
  );
};

export default HenrysBarbershop;
