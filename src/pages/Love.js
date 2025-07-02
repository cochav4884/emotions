import React from "react";
import "../Styles/emotions.css"; // Make sure this path is correct
import love1 from "../images/love1.jpg";
import love2 from "../images/love2.jpg";
import love3 from "../images/love3.jpg";

const Love = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Feeling Love</h1>

      <div className="d-flex flex-wrap justify-content-center my-4">
        <img
          src={love1}
          alt="Feeling love 1"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={love2}
          alt="Feeling love 2"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={love3}
          alt="Feeling love 3"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Your Love</h2>
        <h3 className="text-center">
          Everyone shares the feeling of love differently. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Understand why you are feeling love and share that knowledge with someone else.</li>
          <li>Recognize and accept the emotion as a normal part of life.</li>
          <li>Keep a journal of feeling love to refer to on bad days.</li>
          <li>Once you have identified a concern, consider different solutions.</li>
          <li>Choose a physical activity to do with others (running, swimming, sports, etc.).</li>
          <li>
            Help others who are having a bad day—but protect your own mood and emotions.
          </li>
          <li>Use "I" statements (I am feeling…, I feel loved because…, I want to try…).</li>
          <li>Grow your circle of friends—step out and meet someone new.</li>
          <li>Embrace confrontation thoughtfully. Listen first, reflect, and then respond.</li>
          <li>Develop a passion and invest in a new hobby.</li>
        </ul>
      </article>
    </div>
  );
};

export default Love;
