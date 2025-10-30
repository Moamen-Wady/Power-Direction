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
        نحن الآن الموزع المعتمد لشركة لكتروبار في مصر
        <span className="absprofile">
          <a href="/profile.pdf" target="_blank">
            تنزيل ملف الشركة
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
