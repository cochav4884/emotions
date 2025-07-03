// src/pages/Home.js
import React from "react";
import images from "../data/imagesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <div>
      {/* Carousel Section */}
      <div className="container mt-4" style={{ maxWidth: "800px" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Carousel indicators */}
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Carousel slides */}
          <div className="carousel-inner" style={{ height: "600px" }}>
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                  style={{ height: "600px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Emotion Grid Section */}
      <header className="header2 mt-5 text-center">
        <h1>CLICK ON YOUR EMOTION BELOW TO FIND ITS EFFECTS</h1>
      </header>

      <div className="container-fluid my-4">
        <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-4">
          {[
            ["RAGE", "https://www.betterhealth.vic.gov.au/health/healthyliving/anger-how-it-affects-people", "red"],
            ["AWESOME", "https://newsinhealth.nih.gov/2015/08/positive-emotions-your-health", "yellowgreen"],
            ["ANXIETY", "https://www.webmd.com/balance/guide/how-worrying-affects-your-body", "purple"],
            ["DEPRESSED", "https://www.healthline.com/health/depression/effects-on-body", "black"],
            ["ANGRY", "https://www.betterhealth.vic.gov.au/health/healthyliving/anger-how-it-affects-people#health-problems-with-anger", "redorange"],
            ["HAPPY", "https://www.nm.org/healthbeat/healthy-tips/how-happiness-impacts-health", "green"],
            ["EMBARRASSED", "https://www.goodtherapy.org/blog/psychpedia/embarrassment", "pink"],
            ["PAIN", "https://www.verywellmind.com/physical-pain-and-emotional-pain-22421", "brown"],
            ["UPSET", "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-symptoms/art-20050987", "orange"],
            ["SAD", "https://www.sciencedaily.com/releases/2015/12/151216144833.htm", "greenblue"],
            ["NEUTRAL", "https://www.frontiersin.org/articles/10.3389/fpsyg.2019.02476/full", "white"],
            ["NEGATIVE", "https://fherehab.com/learning/negative-emotions-health", "rainbow"],
            ["IRRITATED", "https://www.healthline.com/health/irritability", "orangeyellow"],
            ["RELAXED", "https://www.webmd.com/balance/ss/slideshow-what-happens-when-relax", "blue"],
            ["CONFUSED", "https://www.medicalnewstoday.com/articles/confusion", "grey"],
            ["POSITIVE", "https://newsinhealth.nih.gov/2015/08/positive-emotions-your-health", "rainbow2"],
            ["BOTHERED", "https://www.takingcharge.csh.umn.edu/how-do-thoughts-and-emotions-affect-health", "yellow"],
            ["LOVE", "https://www.healthline.com/health/relationships/effects-of-love", "bluepurple"],
            ["LOST", "https://www.nia.nih.gov/news/social-isolation-loneliness-older-people-pose-health-risks", "ash"],
            ["UNDECIDED", "https://www.healthline.com/health/5-steps-overcoming-indecision", "rainbow3"],
          ].map(([label, link, color], index) => (
            <div className={`col ${color}`} key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="p-3 border bg-light text-dark">{label}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
