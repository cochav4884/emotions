import React from "react";
import depressed1 from "../images/depressed1.jpg";
import depressed2 from "../images/depressed2.jpg";
import depressed3 from "../images/depressed3.jpg";
import "./App.css"; // or your styles file

const Depressed = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with feeling depressed</h1>

      <div>
        <img src={depressed2} alt="Depressed 2" width={600} height={550} />
        <img src={depressed1} alt="Depressed 1" width={600} height={550} />
        <img src={depressed3} alt="Depressed 3" width={600} height={550} />
      </div>

      <article>
        <h2>Healthy ways to express feeling depressed</h2>
        <h3>
          Everyone has to work through depression in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>Sit in a quiet place and write down what is depressing you.</li>
          <li>Unsure of outcomes of depression, write down your fears.</li>
          <li>Talk to someone you trust about why you are feeling depressed.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose an easy activity to ease your mind (art, music, watching tv).</li>
          <li>Go to bed or take a nap.</li>
          <li>Stick with "I" statements (I am feeling.., I am depressed because.., I want to try..).</li>
          <li>Write down what is depressing you (when you are finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation over. Breathe.</li>
        </ul>
      </article>
    </section>
  );
};

export default Depressed;
