import React from "react";
import "../App.css"; // Adjust path if needed
import lost1 from "../images/lost1.jpg";
import lost2 from "../images/lost2.jpg";
import lost3 from "../images/lost3.jpg";

const Lost = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Being Lost</h1>

      <div className="d-flex flex-wrap justify-content-center my-4">
        <img
          src={lost1}
          alt="Feeling lost 1"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={lost2}
          alt="Feeling lost 2"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={lost3}
          alt="Feeling lost 3"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Being Lost</h2>
        <h3 className="text-center">
          Everyone has to work through their feeling of being lost in different ways. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Sit in a quiet place and write down why you are feeling lost.</li>
          <li>If unsure about outcomes, write down your fears.</li>
          <li>Talk to someone you trust about why you are feeling lost.</li>
          <li>Once you have identified the problem, consider different solutions.</li>
          <li>Choose an easy activity to ease your mind (art, music, watching TV).</li>
          <li>Go to bed or take a nap.</li>
          <li>Stick with "I" statements (I am feeling…, I am lost because…, I want to try…).</li>
          <li>Write down what is making you feel lost (then crumple it up and throw it away).</li>
          <li>Embrace confrontation thoughtfully. Listen first, think it over, then respond.</li>
          <li>Sometimes, not saying anything is best. Just listen, breathe, and return later.</li>
        </ul>
      </article>
    </div>
  );
};

export default Lost;
