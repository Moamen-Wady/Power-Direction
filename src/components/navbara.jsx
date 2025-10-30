import { Link } from "react-router-dom";
import "./navbara.css";
import { memo } from "react";

export default memo(function Navbara({ setterLang }) {
  return (
    <div className="anvbr" id="nvb">
      <div className="atopbar">
        <div className="atopleft">
          <img loading="lazy" src="/logo.webp" className="alogonav" />
          <p>
            <b>Power Direction</b>
            للحلول المثالية
          </p>
        </div>

        <div className="alang">
          <Link onClick={() => setterLang("ar")} className="alanlink">
            <p>عربي</p>
          </Link>
          <Link onClick={() => setterLang("en")} className="alanlink">
            <p>EN</p>
          </Link>
        </div>
      </div>
    </div>
  );
});
