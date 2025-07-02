import React from "react";
import bothered1 from "../images/bothered1.jpg";
import bothered2 from "../images/bothered2.jpg";
import bothered3 from "../images/bothered3.jpg";
import "../App.css"; // or your custom styles file

const Bothered = () => {
  return (
    <section className="text-center">
      <h1>Self-Care for working with being bothered</h1>

      <div>
        <img src={bothered1} alt="Bothered 1" width={600} height={550} />
        <img src={bothered2} alt="Bothered 2" width={600} height={550} />
        <img src={bothered3} alt="Bothered 3" width={600} height={550} />
      </div>

      <article>
        <h2>Healthy ways to express being bothered</h2>
        <h3>
          Everyone has to work through their feeling of being bothered in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion">
          <li>Eat something that makes you feel better.</li>
          <li>Recognise and accept the emotion as a normal part of life.</li>
          <li>Talk to someone you trust about why you are feeling bothered.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose an activity such as art, music, cooking to take your mind off the issue.</li>
          <li>Go to bed or take a nap.</li>
          <li>Stick with "I" statements (I am feeling.., I am bothered because.., I want to try..).</li>
          <li>Write down what is bothering you (when you are finished, crumple it up and throw it away).</li>
          <li>Embrace confrontation. Try to understand what the other person is saying, take your time to think about it before you respond.</li>
          <li>Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation over. Breathe.</li>
        </ul>
      </article>
    </section>
  );
};

export default Bothered;
