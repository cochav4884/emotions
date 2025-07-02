import React from "react";
import "../Styles/emotions.css";
import relaxed1 from "../images/relaxed1.jpg";
import relaxed2 from "../images/relaxed2.jpg";
import relaxed3 from "../images/relaxed3.jpg";

const Relaxed = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for Working with Feeling Relaxed</h1>

      <div className="d-flex flex-wrap justify-content-center my-4">
        <img
          src={relaxed1}
          alt="Relaxed 1"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={relaxed3}
          alt="Relaxed 3"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={relaxed2}
          alt="Relaxed 2"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy Ways to Express Feeling Relaxed</h2>
        <h3 className="text-center">
          Everyone has to work through their feeling of being relaxed in different ways. <br />
          Look through the suggestions and find what works best for you.
        </h3>
        <ul className="emotion mt-4">
          <li>Take your time to respond.</li>
          <li>Unsure of outcomes of feeling relaxed? Write down your fears.</li>
          <li>Talk to someone about your feeling of being relaxed.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose an easy activity to ease your mind (art, music, watching TV).</li>
          <li>Go to bed or take a nap.</li>
          <li>
            Stick with "I" statements (I am feeling..., I am feeling relaxed because..., I want to try...).
          </li>
          <li>
            Write down why you are relaxed (when you're finished, crumple it up and throw it away).
          </li>
          <li>
            Embrace confrontation. Try to understand what the other person is saying. Take your time to think about it before you respond.
          </li>
          <li>
            Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the situation. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Relaxed;
