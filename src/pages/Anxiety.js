import React from "react";
import anxiety1 from "../images/anxiety1.jpg";
import anxiety2 from "../images/anxiety2.jpg";
import anxiety3 from "../images/anxiety3.jpg";
import "../App.css"; // or wherever your styles are

const Anxiety = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with Anxiety</h1>

      <div>
        <img src={anxiety1} alt="Anxiety 1" width={600} height={550} />
        <img src={anxiety2} alt="Anxiety 2" width={600} height={550} />
        <img src={anxiety3} alt="Anxiety 3" width={600} height={550} />
      </div>

      <article>
        <h2>Healthy ways to express anxiety</h2>
        <h3>
          Everyone has to work through anxiety in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>If you feel out of control, walk away from the situation temporarily, until you cool down.</li>
          <li>Recognise and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about your anxiety.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose a physical activity to do such as running, swimming, exercising, playing a sport.</li>
          <li>Think before you speak.</li>
          <li>Stick with "I" statements (I am feeling.., I am anxious because.., I want to try..).</li>
          <li>Write down why you are anxious (when you are finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation over. Breathe.</li>
        </ul>
      </article>
    </section>
  );
};

export default Anxiety;
