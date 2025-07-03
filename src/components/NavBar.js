import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

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

  const closeDropdown = () => setOpenDropdown(null);

  return (
    <>
      <div className="navbar-header-text text-center p-2">
        <h1>Select a song from the Emotion Music below</h1>
      </div>

      <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
        <Link to="/" className="active" onClick={closeDropdown}>Home</Link>

        {/* Emotion Music 1–20 Dropdowns */}
        {[1, 2, 3, 4].map((set) => (
          <div className="dropdown" key={set}>
            <button
              className="dropbtn"
              onClick={() => toggleDropdown(set)}
              aria-expanded={openDropdown === set}
            >
              Emotion Music {set * 5 - 4}-{set * 5} <i className="fa fa-caret-down"></i>
            </button>
            <div
              className="dropdown-content"
              style={{ display: openDropdown === set ? "block" : "none" }}
            >
              {set === 1 && (
                <>
                  <a href="https://youtu.be/1mjlM_RnsVE" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Rage</a>
                  <a href="https://youtu.be/Qzw6A2WC5Qo" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Anger</a>
                  <a href="https://www.youtube.com/watch?v=VbfpW0pbvaU" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Upset</a>
                  <a href="https://www.youtube.com/watch?v=8M0lQ4vwCNQ" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Irritated</a>
                  <a href="https://www.youtube.com/watch?v=fKtY_37r1V" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Bothered</a>
                </>
              )}
              {set === 2 && (
                <>
                  <a href="https://youtu.be/qeMFqkcPYcg" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Awesome</a>
                  <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Happy</a>
                  <a href="https://www.youtube.com/watch?v=RBumgq5yVrA" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Sad</a>
                  <a href="https://www.youtube.com/watch?v=mrZRURcb1cM" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Relaxed</a>
                  <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer" onClick={closeDropdown}>Love</a>
                </>
              )}
              {set === 3 && (
                <>
                  <a href="https://www.youtube.com/watch?v=KhnEUbbMWUM" target="_blank" rel="noreferrer" onClick={closeDropdown}>Anxiety</a>
                  <a href="https://www.youtube.com/watch?v=fWNaR-rxAic" target="_blank" rel="noreferrer" onClick={closeDropdown}>Embarrassed</a>
                  <a href="https://www.youtube.com/watch?v=Z9aiBlIpyKU" target="_blank" rel="noreferrer" onClick={closeDropdown}>Neutral</a>
                  <a href="https://www.youtube.com/watch?v=w2Ov5jzm3j8" target="_blank" rel="noreferrer" onClick={closeDropdown}>Confused</a>
                  <a href="https://www.youtube.com/watch?v=6NXnxTNIWkc" target="_blank" rel="noreferrer" onClick={closeDropdown}>Lost</a>
                </>
              )}
              {set === 4 && (
                <>
                  <a href="https://www.youtube.com/watch?v=PVjiKRfKpPI" target="_blank" rel="noreferrer" onClick={closeDropdown}>Depressed</a>
                  <a href="https://www.youtube.com/watch?v=8WEtxJ4-sh4" target="_blank" rel="noreferrer" onClick={closeDropdown}>Pain</a>
                  <a href="https://www.youtube.com/watch?v=u9Dg-g7t2l4" target="_blank" rel="noreferrer" onClick={closeDropdown}>Negative</a>
                  <a href="https://www.youtube.com/watch?v=d-diB65scQU" target="_blank" rel="noreferrer" onClick={closeDropdown}>Positive</a>
                  <a href="https://www.youtube.com/watch?v=kTHNpusq654" target="_blank" rel="noreferrer" onClick={closeDropdown}>Undecided</a>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Help Yourself 1–20 Dropdowns */}
        {[
          { id: 5, label: "Help Yourself 1-5", links: ["/rage", "/anger", "/upset", "/irritated", "/bothered"] },
          { id: 6, label: "Help Yourself 6-10", links: ["/awesome", "/happy", "/sad", "/relaxed", "/love"] },
          { id: 7, label: "Help Yourself 11-15", links: ["/anxiety", "/embarrassed", "/neutral", "/confused", "/lost"] },
          { id: 8, label: "Help Yourself 16-20", links: ["/depressed", "/pain", "/negative", "/positive", "/undecided"] }
        ].map(({ id, label, links }) => (
          <div className="dropdown" key={id}>
            <button
              className="dropbtn"
              onClick={() => toggleDropdown(id)}
              aria-expanded={openDropdown === id}
            >
              {label} <i className="fa fa-caret-down"></i>
            </button>
            <div
              className="dropdown-content"
              style={{ display: openDropdown === id ? "block" : "none" }}
            >
              {links.map((path) => (
                <Link to={path} key={path} onClick={closeDropdown}>
                  {path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Hamburger */}
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
