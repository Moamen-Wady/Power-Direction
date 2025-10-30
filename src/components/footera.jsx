import "./footera.css";
import { Link } from "react-router-dom";

export default function Footera() {
  return (
    <footer className="aff">
      <div className="axcon">
        <div className="aportion1">
          <div className="algsf">
            <img loading="lazy" className="aimx " src="logow.webp" alt="" />
            <p>
              <b>Power Direction</b>
              للحلول المثالية
            </p>
          </div>

          <ul className="aful">
            <li className="axl">
              <Link to="/" className="afll">
                <p>الرئيسية</p>
              </Link>
            </li>
            <li className="axl">
              <Link to="/aboutus" className="afll">
                <p>اعرف عنا</p>
              </Link>
            </li>
            <li className="axl">
              <Link to="/services" className="afll">
                <p>الخدمات</p>
              </Link>
            </li>
            <li className="axl">
              <Link to="/projects" className="afll">
                <p>المشاريع</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="aportion2">
          <div className="acontact">
            <p>
              <img loading="lazy" src="location.webp" alt="location" />
              6H3 ميدان اللاسلكي المعادي الجديدة - القاهرة
            </p>
            <p>
              <img loading="lazy" src="phone.webp" alt="phone" />
              <a href="tel:+201121391441">01121391441</a> -
              <a href="tel:+201154446201">01154446201</a>
            </p>
            <p>
              <img loading="lazy" src="mail.webp" alt="mail" />
              <a href="mailto:sales.powerdirection@gmail.com">
                sales.powerdirection@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="afbtm">
        <div className="ap1">
          <p className="afollowbtn">تابعنا على:</p>
          <a
            href="https://www.facebook.com/damansolution?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src="fb.webp" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/daman-solutions-b72154267"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src="li.webp" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
