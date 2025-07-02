import React from "react";
import "../App.css"; // Ensure the path is correct
import positive1 from "../images/positive1.jpg";
import positive2 from "../images/positive2.jpg";
import positive3 from "../images/positive3.jpg";

const Positive = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Feeling Positive</h1>

      <div className="d-flex flex-wrap justify-content-center my-4">
        <img
          src={positive1}
          alt="Positive 1"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={positive2}
          alt="Positive 2"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={positive3}
          alt="Positive 3"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Your Positivity</h2>
        <h3 className="text-center">
          Everyone shares positivity differently. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Understand why you are feeling positive and share that knowledge with someone else.</li>
          <li>Recognize and accept the emotion as a normal part of life.</li>
          <li>Keep a journal of feeling positive to refer to on bad days.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose a physical activity to do with others such as running, swimming, exercising, or playing a sport.</li>
          <li>
            Help others who are having a bad day (keep in mind your feeling of positivity — don’t let their bad day
            become your bad day).
          </li>
          <li>
            Stick with "I" statements when working with others (I am feeling..., I am awesome because..., I want to try...).
          </li>
          <li>Grow your circle of friends (go out and meet someone new).</li>
          <li>
            Embrace confrontation. Try to understand what the other person is saying, and take your time to think about
            it before you respond.
          </li>
          <li>Develop a passion and invest in a new hobby.</li>
        </ul>
      </article>
    </div>
  );
};

export default Positive;
