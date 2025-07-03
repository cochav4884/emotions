import React from "react";
import "../App.css"; // Ensure this file exists
import negative1 from "../images/negative1.jpg";
import negative2 from "../images/negative2.jpg";
import negative3 from "../images/negative3.jpg";

const Negative = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Negativity</h1>

      <div>
        <img src={negative1} alt="Anger 1" width="600" height="550" />
        <img src={negative2} alt="Anger 2" width="600" height="550" />
        <img src={negative3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Negativity</h2>
        <h3 className="text-center">
          Everyone has to work through their negativity in different ways.{" "}
          <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>
            If you feel out of control, walk away from the situation
            temporarily, until you cool down.
          </li>
          <li>Recognize and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about why you are feeling negative.</li>
          <li>
            Once you have identified the problem, consider different solutions
            to the problem.
          </li>
          <li>
            Choose a physical activity to do such as running, swimming,
            exercising, or playing a sport.
          </li>
          <li>Think before you speak.</li>
          <li>
            Stick with "I" statements (I am feeling…, I am feeling negative
            because…, I want to try…).
          </li>
          <li>
            Write down why you are feeling negative (when finished, crumple it
            up and throw it away).
          </li>
          <li>
            Embrace confrontation. Try to understand what the other person is
            saying—take time before responding.
          </li>
          <li>
            Sometimes, not saying anything is the best solution. Just listen and
            return later to talk. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Negative;
