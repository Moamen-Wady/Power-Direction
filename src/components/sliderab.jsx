import "./sliderab.css";
import useIntersectionObserver from "@react-hook/intersection-observer";
import { useRef } from "react";

export default function Slidezab() {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div className="absslideshow-container" ref={containerRef}>
      <p className="absonslider">
        We are now the Authorized Distributor of Lectrobar in Egypt
        <span className="absprofile">
          <a href="/profile.pdf" target="_blank">
            Download Profile here
          </a>
        </span>
      </p>
      <img src="/btw.webp" className="absshade" />
      <div ref={containerRef} className="absvidcont">
        {lockRef.current && (
          <video autoPlay muted loop>
            <source src="vid.mp4" type="video/mp4"></source>
          </video>
        )}
      </div>
    </div>
  );
}
