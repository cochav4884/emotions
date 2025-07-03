import React from "react";
import "../App.css";
import upset1 from "../images/upset1.jpg";
import upset2 from "../images/upset2.jpg";
import upset3 from "../images/upset3.jpg";

const Upset = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for working with being upset</h1>

      <div>
        <img src={upset1} alt="Anger 1" width="600" height="550" />
        <img src={upset2} alt="Anger 2" width="600" height="550" />
        <img src={upset3} alt="Anger 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2>Healthy ways to express being upset</h2>
        <h3>
          Everyone has to work through feeling upset differently. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion mt-4">
          <li>Eat something that makes you feel better.</li>
          <li>Recognise and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about why you are feeling upset.</li>
          <li>
            Once you have identified the problem, consider different solutions
            to the problem.
          </li>
          <li>
            Choose an activity such as art, music, cooking to take your mind off
            the issue.
          </li>
          <li>Go to bed or take a nap.</li>
          <li>
            Stick with "I" statements (I am feeling..., I am upset because..., I
            want to try...).
          </li>
          <li>
            Write down what is upsetting you (when you are finished, crumple it
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

export default Upset;
