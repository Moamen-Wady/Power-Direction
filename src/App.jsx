import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useCallback, lazy, Suspense, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/styles.css";
import Slider from "react-slick";
import Loading from "./Loading";
import RouteChangeHandler from "./RouteChangeHandler";
import Errorp from "./Errorp";
import Errorpa from "./Errorpa";

const Navbar = lazy(() => import("./components/navbar"));
const Slidez = lazy(() => import("./components/slider"));
const Ul = lazy(() => import("./components/ul"));
const Footer = lazy(() => import("./components/footer"));
const Navbara = lazy(() => import("./components/navbara"));
const Slideza = lazy(() => import("./components/slidera"));
const Ula = lazy(() => import("./components/ula"));
const Footera = lazy(() => import("./components/footera"));

const Home = lazy(() => import("./Home"));
const Aboutus = lazy(() => import("./Aboutus"));
const Aboutusa = lazy(() => import("./Aboutusa"));
const Homea = lazy(() => import("./Homea"));
const Services = lazy(() => import("./Servicess"));
const Servicesa = lazy(() => import("./Servicessa"));
const Projects = lazy(() => import("./Projects"));
const Projectsa = lazy(() => import("./Projectsa"));

export default function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState([
    false,
    "all",
    "white",
    "black",
  ]);

  const setterLang = useCallback(function (x) {
    setLang(x);
    localStorage.setItem("lang", x);
  }, []);

  useEffect(() => {
    if (navigator.userAgent.match(/samsung/i)) {
      alert(
        "Your browser (Samsung Internet) may not show this website's colors correctly in Dark Mode with setting: 'use dark mode: always/when phone dark mode is on' or when option: 'dark theme sites' is checked. Please choose 'light theme websites' or consider using a standards-compliant browser instead. \n\n" +
          "We recommend Firefox, Microsoft Edge, or Google Chrome."
      );
    }
  }, []);

  const notify = useCallback((e, msg) => {
    toast[e](msg, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  }, []);

  const menuh = useCallback(() => {
    let hb = document.getElementById("hide");
    let vb = document.getElementById("view");
    hb.style.display = "none";
    vb.style.display = "block";
    document.getElementById("mmenu").style.animationName = "none";
    document.getElementById("mul").style.display = "none";
    document.getElementById("l1").style.display = "none";
    document.getElementById("l2").style.display = "none";
    document.getElementById("l3").style.display = "none";
    document.getElementById("l4").style.display = "none";
  }, []);

  const menuv = useCallback(() => {
    let hb = document.getElementById("hide");
    let vb = document.getElementById("view");
    hb.style.display = "block";
    vb.style.display = "none";
    document.getElementById("mul").style.animationName = "showMenu";
    document.getElementById("mul").style.display = "block";
    document.getElementById("l1").style.display = "block";
    document.getElementById("l2").style.display = "block";
    document.getElementById("l3").style.display = "block";
    document.getElementById("l4").style.display = "block";
  }, []);

  return (
    <Router>
      <ToastContainer />
      <RouteChangeHandler setLoading={setLoading} menuh={menuh} />
      {loading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          {lang === "en" ? (
            <>
              <Navbar setterLang={setterLang} />
              <Ul menuh={menuh} menuv={menuv} />
              <Slidez Slider={Slider} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      notify={notify}
                      buttonState={buttonState}
                      setButtonState={setButtonState}
                    />
                  }
                />
                <Route path="/aboutus" element={<Aboutus Slider={Slider} />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<Errorp />} />
              </Routes>
              <Footer menuh={menuh} menuv={menuv} />
            </>
          ) : (
            <>
              <Navbara setterLang={setterLang} />
              <Ula menuh={menuh} menuv={menuv} />
              <Slideza Slider={Slider} />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Homea
                      notify={notify}
                      buttonState={buttonState}
                      setButtonState={setButtonState}
                    />
                  }
                />
                <Route path="/aboutus" element={<Aboutusa Slider={Slider} />} />
                <Route path="/services" element={<Servicesa />} />
                <Route path="/projects" element={<Projectsa />} />
                <Route path="*" element={<Errorpa />} />
              </Routes>
              <Footera menuh={menuh} menuv={menuv} />
            </>
          )}
        </Suspense>
      )}
    </Router>
  );
}
