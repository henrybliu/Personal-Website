import React from "react";
import Dash from "../components/dash";
import "../style/page.css";

const PredictingCVD = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <Dash />
        <h1>Predicting Cardiovascular Disease</h1>
        <h2>
          <a
            href="https://github.com/henrybliu/Predicting-Cardiovascular-Disease"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/henrybliu/Predicting-Cardiovascular-Disease
          </a>
        </h2>

        <h3>About the project</h3>
        <p>
          This project aims to analyze a dataset of 70,000 surveyed patients to
          identify correlations and predictors of Cardiovascular Disease (CVD).
          By performing exploratory data analysis and evaluating our selected
          Machine Learning models against performance metrics such as accuracy,
          precision, recall, and f1-score, we aim to uncover significant factors
          that influence the likelihood of having CVD. Specifically, our
          findings indicate that systolic and diastolic blood pressure,
          cholesterol levels, age, weight, and BMI are the most significant
          indicators of susceptibility to CVD.
        </p>
        <p style={{ marginTop: "15px" }}>
          The&nbsp;
          <a
            href="https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset"
            target="_blank"
            rel="noopener noreferrer"
          >
            dataset&nbsp;
          </a>
          used for this analysis consists of 70,000 patient records collected
          through surveys. Each record contains various attributes related to
          the patients' health, including blood pressure readings, cholesterol
          levels, age, weight, and the presence or absence of CVD. The dataset
          has been preprocessed to remove any inconsistencies or missing values
          to ensure accurate analysis.
        </p>
        <p style={{ marginTop: "15px" }}>
          The primary objectives of this project are as follows: Identify
          correlations:
          <li>
            We aim to explore the relationships between different attributes and
            the presence of CVD. By analyzing the dataset, we can identify
            correlations that may provide insights into the underlying factors
            contributing to CVD.
          </li>
          <li>
            Predictive modeling: Utilizing the dataset, we intend to develop
            predictive models that can estimate the likelihood of an individual
            having CVD based on various attributes such as blood pressure,
            cholesterol levels, age, and weight. These models will aid in early
            detection and prevention efforts.
          </li>
          <li>
            Feature importance: By analyzing the dataset and employing
            statistical techniques, we seek to determine the most significant
            factors that contribute to the development of CVD. Understanding
            these factors can help healthcare professionals prioritize
            interventions and develop targeted prevention strategies.
          </li>
        </p>
        <p style={{ marginTop: "15px" }}>
          To provide a user-friendly experience and enable personalized risk
          assessment, we created an interactive interface. This interface allows
          users to input their characteristics, including relevant health
          attributes, and obtain an estimated diagnosis of their likelihood of
          having cardiovascular disease. By integrating the developed models,
          the interface will provide valuable insights and assist users in
          understanding their CVD risk profile. The demonstration can be viewed
          here:&nbsp;
          <a
            href="https://www.youtube.com/watch?v=iIGGbq5LtM8"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.youtube.com/watch?v=iIGGbq5LtM8
          </a>
          .
        </p>
        <h3> Project tech stack</h3>

        <p>Languages</p>
        <li>Python</li>
        <p>Libraries</p>
        <li>NumPy</li>
        <li>Sklearn</li>
        <li>Seaborn</li>
        <li>Matplotib</li>
      </div>
    </div>
  );
};

export default PredictingCVD;
