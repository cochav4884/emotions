import React from "react";
import "../App.css";
import undecided1 from "../images/undecided1.jpg";
import undecided2 from "../images/undecided2.jpg";
import undecided3 from "../images/undecided3.jpg";

const Undecided = () => {
  return (
    <div className="container my-5 text-center">
      <h1>Self-Care for working with being undecided</h1>

      <div className="d-flex flex-wrap justify-content-center my-4">
        <img
          src={undecided2}
          alt="Undecided 2"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={undecided1}
          alt="Undecided 1"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
        <img
          src={undecided3}
          alt="Undecided 3"
          className="img-fluid m-2"
          style={{ maxWidth: "600px", height: "550px" }}
        />
      </div>

      <article className="text-start mx-auto" style={{ maxWidth: "900px" }}>
        <h2 className="text-center">Healthy ways to express being undecided</h2>
        <h3 className="text-center">
          Everyone has to work through their feeling of being undecided in different ways. <br />
          Look through the suggestions and find what works best for you
        </h3>
        <ul className="emotion mt-4">
          <li>Sit in a quiet place and write down why you are feeling undecided.</li>
          <li>Unsure of outcomes of being undecided, write down your fears.</li>
          <li>Talk to someone you trust about why you are feeling undecided.</li>
          <li>Once you have identified the problem, consider different solutions to the problem.</li>
          <li>Choose an easy activity to ease your mind (art, music, watching tv).</li>
          <li>Go to bed or take a nap.</li>
          <li>Stick with "I" statements (I am feeling..., I am undecided because..., I want to try...).</li>
          <li>Write down why you are feeling undecided (when you are finished, crumple it up and throw it away).</li>
          <li>
            Embrace confrontation. Try to understand what the other person is saying, take your time to think about it
            before you respond.
          </li>
          <li>
            Sometimes, not saying anything is the best solution. Just listen and come back later to talk about the
            situation over. Breathe.
          </li>
        </ul>
      </article>
    </div>
  );
};

export default Undecided;
