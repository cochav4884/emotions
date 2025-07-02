import React from "react";
import anger1 from "../images/anger1.jpg";
import anger2 from "../images/anger2.jpg";
import anger3 from "../images/anger3.jpg";
import "../App.css"; // or your styles file

const Anger = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with Anger</h1>

      <div>
        <img src={anger1} alt="Anger 1" width="600" height="550" />
        <img src={anger2} alt="Anger 2" width="600" height="550" />
        <img src={anger3} alt="Anger 3" width="600" height="550" />
      </div>

      <article>
        <h2>Healthy ways to express anger</h2>
        <h3>
          Everyone has to work through anger in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>If you feel out of control, walk away from the situation temporarily, until you cool down.</li>
          <li>Recognise and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about your anger.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose a physical activity to do such as running, swimming, exercising, playing a sport.</li>
          <li>Think before you speak.</li>
          <li>Stick with "I" statements (I am feeling.., I am angry because.., I want to try..).</li>
          <li>Write down what is angering you (when you are finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation over. Breathe.</li>
        </ul>
      </article>
    </section>
  );
};

export default Anger;
