import React from "react";
import "../App.css"; // Ensure this file exists
import negative1 from "../images/negative1.jpg";
import negative2 from "../images/negative2.jpg";
import negative3 from "../images/negative3.jpg";

const Negative = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Negativity</h1>

      <div className="d-flex flex-wrap justify-content-center my-4">
        <img
          src={negative1}
          alt="Negative 1"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={negative2}
          alt="Negative 2"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={negative3}
          alt="Negative 3"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Negativity</h2>
        <h3 className="text-center">
          Everyone has to work through their negativity in different ways. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>If you feel out of control, walk away from the situation temporarily, until you cool down.</li>
          <li>Recognize and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about why you are feeling negative.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose a physical activity to do such as running, swimming, exercising, or playing a sport.</li>
          <li>Think before you speak.</li>
          <li>Stick with "I" statements (I am feeling…, I am feeling negative because…, I want to try…).</li>
          <li>Write down why you are feeling negative (when finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying—take time before responding.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and return later to talk. Breathe.</li>
        </ul>
      </article>
    </div>
  );
};

export default Negative;
