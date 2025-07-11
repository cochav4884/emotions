import React from "react";
import "../App.css"; // Ensure this file includes .emotion styles
import rage1 from "../images/rage1.jpg";
import rage2 from "../images/rage2.jpg";
import rage3 from "../images/rage3.jpg";

const Rage = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Rage</h1>

      <div>
        <img src={rage1} alt="Anger 1" width="600" height="550" />
        <img src={rage2} alt="Anger 2" width="600" height="550" />
        <img src={rage3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2>Healthy Ways to Express Rage</h2>
        <h3>
          Everyone has to work through rage in different ways. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>
            If you feel out of control, walk away from the situation
            temporarily, until you cool down.
          </li>
          <li>Recognize and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about why you are feeling rage.</li>
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
            Stick with "I" statements (I am feeling..., I am feeling rage
            because..., I want to try...).
          </li>
          <li>
            Write down what is bothering you (when finished, crumple it up and
            throw it away).
          </li>
          <li>
            Embrace confrontation. Try to understand what the other person is
            saying, and take your time to think before responding.
          </li>
          <li>
            Sometimes, not saying anything is the best solution. Just listen and
            come back later to talk about the situation. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Rage;
