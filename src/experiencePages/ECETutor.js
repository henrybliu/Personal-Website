import React from "react";
import { Dash } from "../components";
import "../style/page.css";

const ECETutor = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>UC San Diego Electrical &amp; Computer Engineering</h1>
        <h2>C++ Tutor</h2>
        <h4>September 2023 - December 2023</h4>
        <h3>My work as a tutor</h3>
        <p>
          During the Fall quarter of 2023, I served as an instructional
          assistant for&nbsp;
          <a
            href=" https://www.linkedin.com/in/rajeev-sahay/ "
            target="_blank"
            rel="noopener noreferrer"
          >
            Professor Rajeev Sahay's&nbsp;
          </a>
          <a
            href="https://ucsd.ucsd.edu/catalog/courses/ECE.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            ECE 17&nbsp;
          </a>
          at UC San Diego. This course, designed for electrical engineering
          students, focuses on introductory programming. Over the span of 10
          weeks, the curriculum delves into object-oriented design and
          development in C++, as well as covers essential topics such as data
          structures and algorithms, including selection sort, BFS, and DFS.
        </p>
        <p style={{ marginTop: "15px" }}>
          As a tutor for this course, I hosted office hours to aid students
          one-on-one in answering course questions and providing guidance on
          their programming assignments. Additionally, I took on the
          responsibility of developing scripts to grade the weekly programming
          assignments submitted by the 120+ students enrolled in the course.
          These grading scripts were crafted using Python's OS module, C++ test
          functions, and incorporated tools like Valgrind and Leaks to
          meticulously check for memory leaks.
        </p>

        <h3> What I used to write the scripts</h3>
        <li>Python OS module</li>
        <li>GitHub Classroom CLI</li>
        <li>Leaks (Valgrind for MacOS)</li>
        <li>Valgrind</li>
        <li>C++</li>
      </div>
    </div>
  );
};

export default ECETutor;
