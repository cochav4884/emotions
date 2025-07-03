import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBarPractice.css";

const NavBar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
    setOpenDropdown(null);
  };

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="navbar-header-text text-center p-2">
        <h2>Click on set of emotion and find the music that fits what you are feeling</h2>
      </div>

      <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
        <Link to="/" className="active">Home</Link>

        {/* Emotion Music 1-5 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(1)}
            aria-expanded={openDropdown === 1}
            aria-controls="dropdown1"
          >
            Emotion Music 1-5 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown1"
            className="dropdown-content"
            style={{ display: openDropdown === 1 ? "block" : "none" }}
          >
            <a href="https://youtu.be/1mjlM_RnsVE" target="_blank" rel="noopener noreferrer">Rage</a>
            <a href="https://youtu.be/Qzw6A2WC5Qo" target="_blank" rel="noopener noreferrer">Anger</a>
            <a href="https://www.youtube.com/watch?v=VbfpW0pbvaU" target="_blank" rel="noopener noreferrer">Upset</a>
            <a href="https://www.youtube.com/watch?v=8M0lQ4vwCNQ" target="_blank" rel="noopener noreferrer">Irritated</a>
            <a href="https://www.youtube.com/watch?v=fKtY_37r1V" target="_blank" rel="noopener noreferrer">Bothered</a>
          </div>
        </div>

        {/* Emotion Music 6-10 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(2)}
            aria-expanded={openDropdown === 2}
            aria-controls="dropdown2"
          >
            Emotion Music 6-10 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown2"
            className="dropdown-content"
            style={{ display: openDropdown === 2 ? "block" : "none" }}
          >
            <a href="https://youtu.be/qeMFqkcPYcg" target="_blank" rel="noopener noreferrer">Awesome</a>
            <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs" target="_blank" rel="noopener noreferrer">Happy</a>
            <a href="https://www.youtube.com/watch?v=RBumgq5yVrA" target="_blank" rel="noopener noreferrer">Sad</a>
            <a href="https://www.youtube.com/watch?v=mrZRURcb1cM" target="_blank" rel="noopener noreferrer">Relaxed</a>
            <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Love</a>
          </div>
        </div>

        {/* Emotion Music 11-15 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(3)}
            aria-expanded={openDropdown === 3}
            aria-controls="dropdown3"
          >
            Emotion Music 11-15 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown3"
            className="dropdown-content"
            style={{ display: openDropdown === 3 ? "block" : "none" }}
          >
            <a href="https://www.youtube.com/watch?v=KhnEUbbMWUM" target="_blank" rel="noreferrer">Anxiety</a>
            <a href="https://www.youtube.com/watch?v=fWNaR-rxAic" target="_blank" rel="noreferrer">Embarrassed</a>
            <a href="https://www.youtube.com/watch?v=Z9aiBlIpyKU" target="_blank" rel="noreferrer">Neutral</a>
            <a href="https://www.youtube.com/watch?v=w2Ov5jzm3j8" target="_blank" rel="noreferrer">Confused</a>
            <a href="https://www.youtube.com/watch?v=6NXnxTNIWkc" target="_blank" rel="noreferrer">Lost</a>
          </div>
        </div>

        {/* Emotion Music 16-20 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(4)}
            aria-expanded={openDropdown === 4}
            aria-controls="dropdown4"
          >
            Emotion Music 16-20 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown4"
            className="dropdown-content"
            style={{ display: openDropdown === 4 ? "block" : "none" }}
          >
            <a href="https://www.youtube.com/watch?v=PVjiKRfKpPI" target="_blank" rel="noreferrer">Depressed</a>
            <a href="https://www.youtube.com/watch?v=8WEtxJ4-sh4" target="_blank" rel="noreferrer">Pain</a>
            <a href="https://www.youtube.com/watch?v=u9Dg-g7t2l4" target="_blank" rel="noreferrer">Negative</a>
            <a href="https://www.youtube.com/watch?v=d-diB65scQU" target="_blank" rel="noreferrer">Positive</a>
            <a href="https://www.youtube.com/watch?v=kTHNpusq654" target="_blank" rel="noreferrer">Undecided</a>
          </div>
        </div>

        {/* Help Yourself 1-5 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(5)}
            aria-expanded={openDropdown === 5}
            aria-controls="dropdown5"
          >
            Help Yourself 1-5 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown5"
            className="dropdown-content"
            style={{ display: openDropdown === 5 ? "block" : "none" }}
          >
            <Link to="/rage">Rage</Link>
            <Link to="/anger">Anger</Link>
            <Link to="/upset">Upset</Link>
            <Link to="/irritated">Irritated</Link>
            <Link to="/bothered">Bothered</Link>
          </div>
        </div>

        {/* Help Yourself 6-10 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(6)}
            aria-expanded={openDropdown === 6}
            aria-controls="dropdown6"
          >
            Help Yourself 6-10 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown6"
            className="dropdown-content"
            style={{ display: openDropdown === 6 ? "block" : "none" }}
          >
            <Link to="/awesome">Awesome</Link>
            <Link to="/happy">Happy</Link>
            <Link to="/sad">Sad</Link>
            <Link to="/relaxed">Relaxed</Link>
            <Link to="/love">Love</Link>
          </div>
        </div>

        {/* Help Yourself 11-15 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(7)}
            aria-expanded={openDropdown === 7}
            aria-controls="dropdown7"
          >
            Help Yourself 11-15 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown7"
            className="dropdown-content"
            style={{ display: openDropdown === 7 ? "block" : "none" }}
          >
            <Link to="/anxiety">Anxiety</Link>
            <Link to="/embarrassed">Embarrassed</Link>
            <Link to="/neutral">Neutral</Link>
            <Link to="/confused">Confused</Link>
            <Link to="/lost">Lost</Link>
          </div>
        </div>

        {/* Help Yourself 16-20 */}
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleDropdown(8)}
            aria-expanded={openDropdown === 8}
            aria-controls="dropdown8"
          >
            Help Yourself 16-20 <i className="fa fa-caret-down"></i>
          </button>
          <div
            id="dropdown8"
            className="dropdown-content"
            style={{ display: openDropdown === 8 ? "block" : "none" }}
          >
            <Link to="/depressed">Depressed</Link>
            <Link to="/pain">Pain</Link>
            <Link to="/negative">Negative</Link>
            <Link to="/positive">Positive</Link>
            <Link to="/undecided">Undecided</Link>
          </div>
        </div>

        {/* Hamburger menu */}
        <button
          type="button"
          className="icon"
          onClick={toggleResponsive}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>
      </div>
    </>
  );
};

export default NavBar;
