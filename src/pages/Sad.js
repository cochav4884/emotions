import React from "react";
import "../App.css"; // Make sure your emotion styles are here
import sad1 from "../images/sad1.jpg";
import sad2 from "../images/sad2.jpg";
import sad3 from "../images/sad3.jpg";

const Sad = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for working with feeling sad</h1>

      <div>
        <img src={sad1} alt="Anger 1" width="600" height="550" />
        <img src={sad2} alt="Anger 2" width="600" height="550" />
        <img src={sad3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy ways to express feeling sad</h2>
        <h3 className="text-center">
          Everyone has to work through sadness differently. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Sit in a quiet place and write down what is making you sad.</li>
          <li>Unsure of outcomes of sadness, write down your fears.</li>
          <li>Talk to someone you trust about why you are feeling sad.</li>
          <li>
            Once you have identified the problem, consider different solutions
            to the problem.
          </li>
          <li>
            Choose an easy activity to ease your mind (art, music, watching tv).
          </li>
          <li>Go to bed or take a nap.</li>
          <li>
            Stick with "I" statements (I am feeling..., I am sad because..., I
            want to try...).
          </li>
          <li>
            Write down what is making you sad (when you are finished, crumple it
            up and throw it away).
          </li>
          <li>
            Embrace confrontation. Try to understand what the other person is
            saying, take your time to think about it before you respond.
          </li>
          <li>
            Sometimes, not saying anything is the best solution. Just listen and
            come back later to talk about the situation over. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Sad;
