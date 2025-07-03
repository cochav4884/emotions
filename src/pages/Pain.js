import React from "react";
import "../App.css"; // Make sure this path matches your actual CSS structure
import pain1 from "../images/pain1.jpg";
import pain2 from "../images/pain2.jpg";
import pain3 from "../images/pain3.jpg";

const Pain = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Feeling Emotional Pain</h1>

      <div>
        <img src={pain1} alt="Anger 1" width="600" height="550" />
        <img src={pain2} alt="Anger 2" width="600" height="550" />
        <img src={pain3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">
          Healthy Ways to Express Feeling Emotional Pain
        </h2>
        <h3 className="text-center">
          Everyone has to work through emotional pain differently. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Sit in a quiet place and write down why you are feeling pain.</li>
          <li>If you’re unsure about the outcome, write down your fears.</li>
          <li>
            Talk to someone you trust about why you are feeling emotional pain.
          </li>
          <li>Once you identify the problem, consider different solutions.</li>
          <li>
            Choose an easy activity to ease your mind (art, music, watching TV).
          </li>
          <li>Go to bed or take a nap.</li>
          <li>
            Stick with "I" statements (I am feeling..., I am feeling emotional
            pain because..., I want to try...).
          </li>
          <li>
            Write down what is making you feel emotional pain (when finished,
            crumple it up and throw it away).
          </li>
          <li>
            Embrace confrontation. Try to understand what the other person is
            saying and take time to think before responding.
          </li>
          <li>
            Sometimes, not saying anything is the best solution. Just listen and
            come back later to talk it over. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Pain;
