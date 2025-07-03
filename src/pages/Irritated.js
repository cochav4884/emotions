import React from "react";
import "../App.css"; // Adjust the path if needed
import irritated1 from "../images/irritated1.jpg";
import irritated2 from "../images/irritated2.jpg";
import irritated3 from "../images/irritated3.jpg";

const Irritated = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Being Irritated</h1>

      <div>
        <img src={irritated1} alt="Anger 1" width="600" height="550" />
        <img src={irritated2} alt="Anger 2" width="600" height="550" />
        <img src={irritated3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Irritation</h2>
        <h3 className="text-center">
          Everyone has to work through irritation in different ways. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>
            If you feel out of control, walk away from the situation
            temporarily, until you cool down.
          </li>
          <li>Recognize and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about your irritation.</li>
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
            Stick with "I" statements (I am feeling…, I am irritated because…, I
            want to try…).
          </li>
          <li>
            Write down what is irritating you (when you are finished, crumple it
            up and throw it away).
          </li>
          <li>
            Embrace confrontation. Try to understand what the other person is
            saying. Take your time to think before responding.
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

export default Irritated;
