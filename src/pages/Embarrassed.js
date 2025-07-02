import React from "react";
import embarrassed1 from "../images/embarrassed1.jpg";
import embarrassed2 from "../images/embarrassed2.jpg";
import embarrassed3 from "../images/embarrassed3.jpg";
import "../App.css"; // or your global CSS

const Embarrassed = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with feeling embarrassed</h1>

      <div>
        <img src={embarrassed1} alt="Embarrassed 1" width={600} height={550} />
        <img src={embarrassed2} alt="Embarrassed 2" width={600} height={550} />
        <img src={embarrassed3} alt="Embarrassed 3" width={600} height={550} />
      </div>

      <article>
        <h2>Healthy ways to express embarrassment</h2>
        <h3>
          Everyone has to work through embarrassment in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>Sit in a quiet place and write down what embarrassed you.</li>
          <li>Unsure of outcomes of embarrassed, write down your fears.</li>
          <li>Talk to someone you trust about why you are feeling embarrassed.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose an easy activity to ease your mind (art, music, watching tv).</li>
          <li>Go to bed or take a nap.</li>
          <li>Stick with "I" statements (I am feeling.., I am embarrassed because.., I want to try..).</li>
          <li>Write down what is embarrassing you (when you are finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation over. Breathe.</li>
        </ul>
      </article>
    </section>
  );
};

export default Embarrassed;
