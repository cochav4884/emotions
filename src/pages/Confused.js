import React from "react";
import confused1 from "../images/confused1.jpg";
import confused2 from "../images/confused2.jpg";
import confused3 from "../images/confused3.jpg";
import "../App.css"; // your styles

const Confused = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with being confused</h1>

      <div>
        <img src={confused1} alt="Confused 1" width="600" height="550" />
        <img src={confused2} alt="Confused 2" width="600" height="550" />
        <img src={confused3} alt="Confused 3" width="600" height="550" />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2>Healthy ways to express being confused</h2>
        <h3>
          Everyone has to work through their feeling of being bothered in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>Sit in a quiet place and write down what is confusing you.</li>
          <li>Unsure of outcomes of confusion, write down your fears.</li>
          <li>Talk to someone you trust about why you are feeling confused.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose an easy activity to ease your mind (art, music, watching tv).</li>
          <li>Go to bed or take a nap.</li>
          <li>Stick with "I" statements (I am feeling.., I am confused because.., I want to try..).</li>
          <li>Write down what is confusing you (when you are finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation over. Breathe.</li>
        </ul>
      </article>
    </section>
  );
};

export default Confused;
