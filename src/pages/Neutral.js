import React from "react";
import "../App.css"; // Make sure this path matches your actual stylesheet
import neutral1 from "../images/neutral1.jpg";
import neutral2 from "../images/neutral2.jpg";
import neutral3 from "../images/neutral3.jpg";

const Neutral = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Feeling Neutral</h1>

      <div>
        <img src={neutral1} alt="Anger 1" width="600" height="550" />
        <img src={neutral2} alt="Anger 2" width="600" height="550" />
        <img src={neutral3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Feeling Neutral</h2>
        <h3 className="text-center">
          Everyone has to work through their feeling of being neutral in
          different ways. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Take your time to respond.</li>
          <li>Unsure of outcomes of feeling neutral? Write down your fears.</li>
          <li>Talk to someone about your feeling of neutrality.</li>
          <li>
            Once you’ve identified the problem, consider different solutions.
          </li>
          <li>
            Choose an easy activity to ease your mind (art, music, watching TV).
          </li>
          <li>Go to bed or take a nap.</li>
          <li>
            Stick with "I" statements (I am feeling…, I am feeling neutral
            because…, I want to try…).
          </li>
          <li>
            Write down why you're feeling neutral (then crumple it up and throw
            it away).
          </li>
          <li>
            Embrace confrontation. Try to understand the other person and think
            before you respond.
          </li>
          <li>
            Sometimes, not saying anything is the best option. Just listen and
            come back later to talk. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Neutral;
