import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ff">
      <div className="xcon">
        <div className="portion1">
          <div className="lgsf">
            <img loading="lazy" className="imx " src="logow.webp" alt="" />
            <p>
              <b>Power Direction</b>
              Optimum Soutions
            </p>
          </div>

          <ul className="ful">
            <li className="xl">
              <Link  to="/" className="fll">
                <p>Home</p>
              </Link>
            </li>
            <li className="xl">
              <Link  to="/aboutus" className="fll">
                <p>About Us</p>
              </Link>
            </li>
            <li className="xl">
              <Link  to="/services" className="fll">
                <p>Services</p>
              </Link>
            </li>
            <li className="xl">
              <Link  to="/projects" className="fll">
                <p>Projects</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="portion2">
          <div className="contact">
            <p>
              <img loading="lazy" src="location.webp" alt="location" />
              Laslky Sq. New Maadi, Cairo
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

      <div className="fbtm">
        <div className="p1">
          <p className="followbtn">Follow Us On:</p>
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
};
