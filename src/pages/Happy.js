import React from "react";
import happy1 from "../images/happy1.avif";
import happy2 from "../images/happy2.avif";
import happy3 from "../images/happy3.avif";
import "./App.css"; // or your global styles

const Happy = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with feeling happy</h1>

      <div>
        <img src={happy2} alt="Happy 2" width={600} height={550} />
        <img src={happy1} alt="Happy 1" width={600} height={550} />
        <img src={happy3} alt="Happy 3" width={600} height={550} />
      </div>

      <article>
        <h2>Healthy ways to express your happy</h2>
        <h3>
          Everyone shares the feeling of happy differently. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>Understand why you are feeling happy and share that knowledge with someone else.</li>
          <li>Recognise and accept the emotion as a normal part of life.</li>
          <li>Keep a journal of feeling happy to refer to on bad days.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose a physical activity to do with others such as running, swimming, exercising, playing a sport.</li>
          <li>Help others that are having a bad day (keep in mind your feeling of happy, don't let their bad day become your bad day).</li>
          <li>Stick with "I" statements when working with others (I am feeling.., I am happy because.., I want to try..).</li>
          <li>Grow your circle of friends (go out and meet someone new).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Develop a passion and invest in a new hobby.</li>
        </ul>
      </article>
    </section>
  );
};

export default Happy;
