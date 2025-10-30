import "./navbara.css";
import { Link } from "react-router-dom";
import { useLayoutEffect, memo } from "react";
export default memo(function Ula({ menuh, menuv }) {
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
    <div className="aulcont">
      <img loading="lazy" src="logow.webp" id="imgch" />
      <p className="aultext">
        باور دايركشن للمقاولات العامة والتوريدات والتجارة
      </p>
      <div id="mmenu">
        <img loading="lazy" src="/mbar.webp" alt="" id="hide" onClick={menuh} />
        <img loading="lazy" src="/mbar.webp" alt="" id="view" onClick={menuv} />
        <ul className="aul1" id="mul">
          <li className="al" id="l1">
            <Link to="/" className="all">
              <p>الرئيسية</p>
            </Link>
          </li>
          <li className="al" id="l2">
            <Link to="/aboutus" className="all">
              <p>اعرف عنا</p>
            </Link>
          </li>
          <li className="al" id="l3">
            <Link to="/services" className="all">
              <p>الخدمات</p>
            </Link>
          </li>
          <li className="al" id="l4">
            <Link to="/projects" className="all" id="rdr">
              <p>المشاريع</p>
            </Link>
          </li>
        </ul>
      </div>
      <div id="dmenu">
        <ul className="aul1">
          <li className="al" id="l5">
            <Link to="/" className="all">
              <p>الرئيسية</p>
            </Link>
          </li>
          <li className="al" id="l6">
            <Link to="/aboutus" className="all">
              <p>اعرف عنا</p>
            </Link>
          </li>
          <li className="al" id="l7">
            <Link to="/services" className="all">
              <p>الخدمات</p>
            </Link>
          </li>
          <li className="al" id="l8">
            <Link to="/projects" className="all" id="rdr">
              <p>المشاريع</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});
