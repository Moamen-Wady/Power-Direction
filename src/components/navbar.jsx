import { Link } from "react-router-dom";
import "./navbar.css";
import { memo } from "react";

export default memo(function Navbar({ setterLang }) {
  return (
    <div className="nvbr" id="nvb">
      <div className="topbar">
        <div className="topleft">
          <img loading="lazy" src="/logo.webp" className="logonav" />
          <p>
            <b>Power Direction</b>
            Optimum Solutions
          </p>
        </div>

        <div className="lang">
          <Link onClick={() => setterLang("ar")} className="lanlink">
            <p>AR</p>
          </Link>
          <Link onClick={() => setterLang("en")} className="lanlink">
            <p>EN</p>
          </Link>
        </div>
      </div>
    </div>
  );
});
