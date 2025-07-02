import React from "react";
import "./App.css";

export default function Home() {
  return (
    <>
      {/* Carousel Section */}
      <section>
        <div className="container" style={{ width: 800, height: 600 }}>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              {Array.from({ length: 21 }).map((_, i) => (
                <li
                  key={i}
                  data-target="#myCarousel"
                  data-slide-to={i}
                  className={i === 0 ? "active" : ""}
                />
              ))}
            </ol>

            {/* Wrapper for slides */}
            <div
              className="carousel-inner"
              style={{ width: "800px", height: "600px" }}
            >
              {[
                "sc1.jpg",
                "spiritual5.jpg",
                "woman1.jpg",
                "man2.jpg",
                "family1.jpg",
                "family2.jpg",
                "family3.jpg",
                "family4.jpg",
                "family5.jpg",
                "group1.jpg",
                "group2.jpg",
                "group3.jpg",
                "group4.jpg",
                "group5.jpg",
                "sc3.jpg",
                "spiritual1.jpg",
                "man1.jpg",
                "woman3.jpg",
                "spiritual4.jpg",
                "sc2.jpg",
                "spiritual3.jpg",
              ].map((img, index) => (
                <div
                  key={index}
                  className={`item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={`/img/${img}`}
                    alt=""
                    style={{ width: "800px", height: "600px" }}
                  />
                  <div className="carousel-caption">
                    <p className="h3 fs-1 fw-bold"></p>
                  </div>
                </div>
              ))}
            </div>

            {/* Left and right controls */}
            <a
              className="left carousel-control"
              href="#myCarousel"
              data-slide="prev"
            >
              <span className="glyphicon glyphicon-chevron-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              data-slide="next"
            >
              <span className="glyphicon glyphicon-chevron-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>

      {/* Emotion Grid Section */}
      <header className="header2">
        <h1>CLICK ON YOUR EMOTION BELOW TO FIND ITS EFFECTS</h1>
      </header>

      <div className="container-fluid">
        <div className="row row-cols-3 row-cols-lg-5 g-2 g-lg-4">
          <div className="col red">
            <a
              href="https://www.betterhealth.vic.gov.au/health/healthyliving/anger-how-it-affects-people"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">RAGE</div>
            </a>
          </div>
          <div className="col yellowgreen">
            <a
              href="https://newsinhealth.nih.gov/2015/08/positive-emotions-your-health#:~:text=Research%20has%20found%20a%20link,sugar%20levels%2C%20and%20longer%20life."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">AWESOME</div>
            </a>
          </div>
          <div className="col purple">
            <a
              href="https://www.webmd.com/balance/guide/how-worrying-affects-your-body"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">ANXIETY</div>
            </a>
          </div>
          <div className="col black">
            <a
              href="https://www.healthline.com/health/depression/effects-on-body"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">DEPRESSED</div>
            </a>
          </div>
          <div className="col redorange">
            <a
              href="https://www.betterhealth.vic.gov.au/health/healthyliving/anger-how-it-affects-people#health-problems-with-anger"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">ANGRY</div>
            </a>
          </div>
          <div className="col green">
            <a
              href="https://www.nm.org/healthbeat/healthy-tips/how-happiness-impacts-health#:~:text=Protecting%20your%20health%3A%20Happiness%20lowers,regular%20exercise%20and%20reduces%20stress."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">HAPPY</div>
            </a>
          </div>
          <div className="col pink">
            <a
              href="https://www.goodtherapy.org/blog/psychpedia/embarrassment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">EMBARRASSED</div>
            </a>
          </div>
          <div className="col brown">
            <a
              href="https://www.verywellmind.com/physical-pain-and-emotional-pain-22421"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">PAIN</div>
            </a>
          </div>
          <div className="col orange">
            <a
              href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/stress-symptoms/art-20050987#:~:text=Common%20effects%20of%20stress&text=Stress%20that's%20left%20unchecked%20can,heart%20disease%2C%20obesity%20and%20diabetes."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">UPSET</div>
            </a>
          </div>
          <div className="col greenblue">
            <a
              href="https://www.sciencedaily.com/releases/2015/12/151216144833.htm#:~:text=12%2F151216144833.htm-,Feeling%20sad%20can%20alter%20levels%20of%20stress%2Drelated%20opioids%20in,syndrome%2C%20according%20to%20a%20study."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">SAD</div>
            </a>
          </div>
          <div className="col white">
            <a
              href="https://www.frontiersin.org/articles/10.3389/fpsyg.2019.02476/full"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">NEUTRAL</div>
            </a>
          </div>
          <div className="col rainbow">
            <a
              href="https://fherehab.com/learning/negative-emotions-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">NEGATIVE</div>
            </a>
          </div>
          <div className="col orangeyellow">
            <a
              href="https://www.healthline.com/health/irritability"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">IRRITATED</div>
            </a>
          </div>
          <div className="col blue">
            <a
              href="https://www.webmd.com/balance/ss/slideshow-what-happens-when-relax#:~:text=This%20%22fight%20or%20flight%22%20response,slows%20your%20heart%20rate%20down."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">RELAXED</div>
            </a>
          </div>
          <div className="col grey">
            <a
              href="https://www.medicalnewstoday.com/articles/confusion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">CONFUSED</div>
            </a>
          </div>
          <div className="col rainbow2">
            <a
              href="https://newsinhealth.nih.gov/2015/08/positive-emotions-your-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">POSITIVE</div>
            </a>
          </div>
          <div className="col yellow">
            <a
              href="https://www.takingcharge.csh.umn.edu/how-do-thoughts-and-emotions-affect-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">BOTHERED</div>
            </a>
          </div>
          <div className="col bluepurple">
            <a
              href="https://www.healthline.com/health/relationships/effects-of-love"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">LOVE</div>
            </a>
          </div>
          <div className="col ash">
            <a
              href="https://www.nia.nih.gov/news/social-isolation-loneliness-older-people-pose-health-risks#:~:text=Health%20effects%20of%20social%20isolation,Alzheimer's%20disease%2C%20and%20even%20death."
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">LOST</div>
            </a>
          </div>
          <div className="col rainbow3">
            <a
              href="https://www.healthline.com/health/5-steps-overcoming-indecision"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="p-3 border bg-light text-dark">UNDECIDED</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
