import "./navbar.css";
import { Link } from "react-router-dom";
import { useLayoutEffect, memo } from "react";
export default memo(function Ul({ menuh, menuv }) {
  useLayoutEffect(() => {
    menuh();
    function d() {
      let s = window.scrollY;
      let n = document.getElementById("nvb");
      let h = n.clientHeight;
      let ch = document.getElementById("imgch");

      if (s >= h) {
        ch.style.display = "inline";
      } else {
        ch.style.display = "none";
      }
    }
    window.onscroll = d;
    return window.removeEventListener("scroll", d);
  }, [menuh]);

  return (
    <div className="ulcont">
      <img loading="lazy" src="logow.webp" id="imgch" />
      <p className="ultext">
        Power Direction for General Contracts, Supplies and Trade
      </p>
      <div id="mmenu">
        <img loading="lazy" src="/mbar.webp" alt="" id="hide" onClick={menuh} />
        <img loading="lazy" src="/mbar.webp" alt="" id="view" onClick={menuv} />
        <ul className="ul1" id="mul">
          <li className="l" id="l1">
            <Link to="/" className="ll">
              <p>Home</p>
            </Link>
          </li>
          <li className="l" id="l2">
            <Link to="/aboutus" className="ll">
              <p>About Us</p>
            </Link>
          </li>
          <li className="l" id="l3">
            <Link to="/services" className="ll">
              <p>Services</p>
            </Link>
          </li>
          <li className="l" id="l4">
            <Link to="/projects" className="ll" id="rdr">
              <p>Projects</p>
            </Link>
          </li>
        </ul>
      </div>
      <div id="dmenu">
        <ul className="ul1">
          <li className="l" id="l5">
            <Link to="/" className="ll">
              <p>Home</p>
            </Link>
          </li>
          <li className="l" id="l6">
            <Link to="/aboutus" className="ll">
              <p>About Us</p>
            </Link>
          </li>
          <li className="l" id="l7">
            <Link to="/services" className="ll">
              <p>Services</p>
            </Link>
          </li>
          <li className="l" id="l8">
            <Link to="/projects" className="ll" id="rdr">
              <p>Projects</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});
