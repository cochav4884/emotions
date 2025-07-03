import React, { useState } from "react";
import "../styles/NavBarPractice.css";

const NavBarPractice = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    setDropdownOpen1(false);
    setDropdownOpen3(false);
    setDropdownOpen4(false);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!dropdownOpen3);
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen4(false);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!dropdownOpen4);
    setDropdownOpen1(false);
    setDropdownOpen2(false);
    setDropdownOpen3(false);
  };

  return (
    <div className={`topnav ${isResponsive ? "responsive" : ""}`} id="myTopnav">
      <a href="#home" className="active">
        Home
      </a>

      {/* Set 1 Dropdown */}
      <div className="dropdown" onClick={toggleDropdown1}>
        <button className="dropbtn">
          Set 1 <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isResponsive ? (dropdownOpen1 ? "block" : "none") : undefined,
          }}
        >
          <a href="https://youtu.be/1mjlM_RnsVE" target="_blank" rel="noopener noreferrer">Rage</a>
          <a href="https://youtu.be/Qzw6A2WC5Qo" target="_blank" rel="noopener noreferrer">Anger</a>
          <a href="https://www.youtube.com/watch?v=VbfpW0pbvaU" target="_blank" rel="noopener noreferrer">Upset</a>
          <a href="https://www.youtube.com/watch?v=8M0lQ4vwCNQ" target="_blank" rel="noopener noreferrer">Irritated</a>
          <a href="https://www.youtube.com/watch?v=fKtY_37r1V" target="_blank" rel="noopener noreferrer">Bothered</a>
        </div>
      </div>

      {/* Set 2 Dropdown */}
      <div className="dropdown" onClick={toggleDropdown2}>
        <button className="dropbtn">
          Set 2 <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isResponsive ? (dropdownOpen2 ? "block" : "none") : undefined,
          }}
        >
          <a href="https://youtu.be/qeMFqkcPYcg" target="_blank" rel="noopener noreferrer">Awesome</a>
          <a href="https://www.youtube.com/watch?v=ZbZSe6N_BXs" target="_blank" rel="noopener noreferrer">Happy</a>
          <a href="https://www.youtube.com/watch?v=RBumgq5yVrA" target="_blank" rel="noopener noreferrer">Sad</a>
          <a href="https://www.youtube.com/watch?v=mrZRURcb1cM" target="_blank" rel="noopener noreferrer">Relaxed</a>
          <a href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">Love</a>
        </div>
      </div>

      {/* Set 3 Dropdown (same structure) */}
      <div className="dropdown" onClick={toggleDropdown3}>
        <button className="dropbtn">
          Set 3 <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isResponsive ? (dropdownOpen3 ? "block" : "none") : undefined,
          }}
        >
          <a href="https://www.youtube.com/watch?v=KhnEUbbMWUM" target="_blank" rel="noreferrer">Anxiety</a>
          <a href="https://www.youtube.com/watch?v=fWNaR-rxAic" target="_blank" rel="noreferrer">Embarrassed</a>
          <a href="https://www.youtube.com/watch?v=Z9aiBlIpyKU" target="_blank" rel="noreferrer">Neutral</a>
          <a href="https://www.youtube.com/watch?v=w2Ov5jzm3j8" target="_blank" rel="noreferrer">Confused</a>
          <a href="https://www.youtube.com/watch?v=6NXnxTNIWkc" target="_blank" rel="noreferrer">Lost</a>
        </div>
      </div>

      {/* Set 4 Dropdown (same structure) */}
      <div className="dropdown" onClick={toggleDropdown4}>
        <button className="dropbtn">
          Set 4 <i className="fa fa-caret-down" aria-hidden="true"></i>
        </button>
        <div
          className="dropdown-content"
          style={{
            display: isResponsive ? (dropdownOpen4 ? "block" : "none") : undefined,
          }}
        >
          <a href="https://www.youtube.com/watch?v=PVjiKRfKpPI" target="_blank" rel="noreferrer">Depressed</a>
          <a href="https://www.youtube.com/watch?v=8WEtxJ4-sh4" target="_blank" rel="noreferrer">Pain</a>
          <a href="https://www.youtube.com/watch?v=u9Dg-g7t2l4" target="_blank" rel="noreferrer">Negative</a>
          <a href="https://www.youtube.com/watch?v=d-diB65scQU" target="_blank" rel="noreferrer">Positive</a>
          <a href="https://www.youtube.com/watch?v=kTHNpusq654" target="_blank" rel="noreferrer">Undecided</a>
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <button
        type="button"
        className="icon"
        onClick={toggleResponsive}
        aria-label="Toggle navigation"
      >
        &#9776;
      </button>
    </div>
  );
};

export default NavBarPractice;
