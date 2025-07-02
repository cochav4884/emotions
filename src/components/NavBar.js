import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="header2 text-center my-3">
        <h1>CLICK ON A MUSICAL-EMOTION BUTTON BELOW TO FIND YOURS</h1>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <button
              type="button"
              className="navbar-brand text-light btn btn-link"
              style={{ textDecoration: "none" }}
              tabIndex={0}
              aria-label="Navbar brand"
            >
              NAVBAR
            </button>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Musical-Emotions 1 thru 5 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-light text-decoration-none btn btn-link"
                  id="musicalEmotions1to5"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  Musical-Emotions 1 thru 5
                </button>
                <ul className="dropdown-menu" aria-labelledby="musicalEmotions1to5">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://youtu.be/1mjlM_RnsVE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box red">RAGE</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://youtu.be/Qzw6A2WC5Qo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box redorange">ANGRY</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=VbfpW0pbvaU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box orange">UPSET</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=8M0lQ4vwCNQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box orangeyellow">IRRITATED</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=fKtY_37r1VI"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box yellow">BOTHERED</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Musical-Emotions 6 thru 10 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-light text-decoration-none btn btn-link"
                  id="musicalEmotions6to10"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  Musical-Emotions 6 thru 10
                </button>
                <ul className="dropdown-menu" aria-labelledby="musicalEmotions6to10">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://youtu.be/qeMFqkcPYcg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box yellowgreen">AWESOME</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=ZbZSe6N_BXs"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box green">HAPPY</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=RBumgq5yVrA"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box greenblue">SAD</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=mrZRURcb1cM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box blue">RELAXED</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://youtu.be/dQw4w9WgXcQ"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box bluepurple">LOVE</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Musical-Emotions 11 thru 15 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-light text-decoration-none btn btn-link"
                  id="musicalEmotions11to15"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  Musical-Emotions 11 thru 15
                </button>
                <ul className="dropdown-menu" aria-labelledby="musicalEmotions11to15">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=KhnEUbbMWUM"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box purple">ANXIETY</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=fWNaR-rxAic"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box pink">EMBARRASSED</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=Z9aiBlIpyKU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box white">NEUTRAL</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=w2Ov5jzm3j8"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box grey">CONFUSED</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=6NXnxTNIWkc"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box ash">LOST</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Musical-Emotions 16 thru 20 */}
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-light text-decoration-none btn btn-link"
                  id="musicalEmotions16to20"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ textDecoration: "none" }}
                >
                  Musical-Emotions 16 thru 20
                </button>
                <ul className="dropdown-menu" aria-labelledby="musicalEmotions16to20">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=PVjiKRfKpPI"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box black">DEPRESSED</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=8WEtxJ4-sh4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box brown">PAIN</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=u9Dg-g7t2l4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box rainbow">NEGATIVE</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=d-diB65scQU"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box rainbow2">POSITIVE</div>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.youtube.com/watch?v=kTHNpusq654"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="grid box rainbow3">UNDECIDED</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
