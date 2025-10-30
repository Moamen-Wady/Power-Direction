import "./styles/about.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect, useState, memo, useLayoutEffect } from "react";
import Slidezab from "./components/sliderab";
import { useCallback } from "react";

const EvImg = function EvImgComponent() {
  const [cli, setCli] = useState(1);

  const cliprv = useCallback(() => {
    if (cli == 1) {
      document.getElementById(`sslide8`).style.animationName = "gotoleft";
    } else {
      document.getElementById(`sslide${cli - 1}`).style.animationName =
        "gotoleft";
    }
  }, [cli]);
  const clinxt = useCallback(() => {
    if (cli == 7) {
      document.getElementById(`sslide7`).style.animationName = "midtoleft";
      document.getElementById(`sslide8`).style.animationName = "righttomid";
      document.getElementById(`sslide1`).style.animationName = "comefromright";
    } else if (cli == 8) {
      document.getElementById(`sslide8`).style.animationName = "midtoleft";
      document.getElementById(`sslide1`).style.animationName = "righttomid";
      document.getElementById(`sslide2`).style.animationName = "comefromright";
    } else {
      document.getElementById(`sslide${cli}`).style.animationName = "midtoleft";
      document.getElementById(`sslide${cli + 1}`).style.animationName =
        "righttomid";
      document.getElementById(`sslide${cli + 2}`).style.animationName =
        "comefromright";
    }
  }, [cli]);
  const nclincr = useCallback(() => {
    if (cli == 8) {
      setCli(1);
    } else {
      setCli(cli + 1);
    }
  }, [cli]);
  const xcliprv = useCallback(() => {
    if (cli == 8) {
      document.getElementById(`sslide1`).style.animationName = "gotoright";
    } else {
      document.getElementById(`sslide${cli + 1}`).style.animationName =
        "gotoright";
    }
  }, [cli]);
  const xclinxt = useCallback(() => {
    if (cli == 1) {
      document.getElementById(`sslide7`).style.animationName = "comefromleft";
      document.getElementById(`sslide8`).style.animationName = "lefttomid";
      document.getElementById(`sslide1`).style.animationName = "midtoright";
    } else if (cli == 2) {
      document.getElementById(`sslide8`).style.animationName = "comefromleft";
      document.getElementById(`sslide1`).style.animationName = "lefttomid";
      document.getElementById(`sslide2`).style.animationName = "midtoright";
    } else {
      document.getElementById(`sslide${cli - 2}`).style.animationName =
        "comefromleft";
      document.getElementById(`sslide${cli - 1}`).style.animationName =
        "lefttomid";
      document.getElementById(`sslide${cli}`).style.animationName =
        "midtoright";
    }
  }, [cli]);
  const nclidcr = useCallback(() => {
    if (cli == 1) {
      setCli(8);
    } else {
      setCli(cli - 1);
    }
  }, [cli]);
  const clifwd = useCallback(() => {
    cliprv();
    clinxt();
    nclincr();
  }, [cli]);
  const clibwd = useCallback(() => {
    xcliprv();
    xclinxt();
    nclidcr();
  }, [cli]);
  useEffect(() => {
    clifwd();
  }, []);
  return (
    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeIn">
      <div className="aboutclcont">
        <div className="aboutcl">
          <div className="aboutclimg">
            <button id="sleft" className="aboutclbtn" onClick={clifwd}>
              <img loading="lazy" src="l.webp" alt=" " />
            </button>
            <div className="sslide" id="sslide1">
              <img loading="lazy" src="/ev6.webp" alt="" />
            </div>
            <div className="sslide" id="sslide2">
              <img loading="lazy" src="/ev7.webp" alt="" />
            </div>
            <div className="sslide" id="sslide3">
              <img loading="lazy" src="/ev8.webp" alt="" />
            </div>
            <div className="sslide" id="sslide4">
              <img loading="lazy" src="/ev9.webp" alt="" />
            </div>
            <div className="sslide" id="sslide5">
              <img loading="lazy" src="/ev10.webp" alt="" />
            </div>
            <div className="sslide" id="sslide6">
              <img loading="lazy" src="/ev11.webp" alt="" />
            </div>
            <div className="sslide" id="sslide7">
              <img loading="lazy" src="/ev12.webp" alt="" />
            </div>
            <div className="sslide" id="sslide8">
              <img loading="lazy" src="/ev13.webp" alt="" />
            </div>
            <button id="sright" className="aboutclbtn" onClick={clibwd}>
              <img loading="lazy" src="r.webp" alt=" " />
            </button>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

const Events = memo(function EventsComponent({ Slider }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
  };

  const slides = [
    {
      img: "/ev0.webp",
    },
    {
      img: "/ev1.webp",
    },
    {
      img: "/ev2.webp",
    },
    {
      img: "/ev3.webp",
    },
    {
      img: "/ev4.webp",
    },
    {
      img: "/ev5.webp",
    },
  ];

  return (
    <AnimationOnScroll
      className="aboutslideshow-container"
      animateOnce={false}
      animateIn="animate__fadeIn"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="aboutslide-image"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </AnimationOnScroll>
  );
});
export default memo(function Aboutus({ Slider }) {
  useLayoutEffect(() => {
    let oldSlider = document.getElementById("slix");
    if (oldSlider) {
      oldSlider.style.display = "none";
    }
    return () => (oldSlider.style.display = "block");
  }, []);

  return (
    <div className="about">
      <Slidezab />
      <AnimationOnScroll
        className="about1"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <div className="chat-bubble">
          <p>
            Our vision is to be a leader in electrical contracting by
            consistently achieving operational efficiency. Power Direction is
            dedicated to providing innovative, stable, and cost-effective
            solutions that protect our clients from market fluctuations. We aim
            to redefine professional project management and design within the
            industry.
          </p>
        </div>
        <h1>Our Vision</h1>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="about2"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <div className="chat-bubble">
          <p>
            Founded in 2023, Power Direction emerged as a reliable startup
            committed to excellence in electrical installations. Over time, we
            have expanded our offerings to include comprehensive power
            distribution systems and advanced electrical components. Our growth
            has been driven by innovation and sustainability, positioning us as
            a transformative force in Egypt’s electrical industry. In 2024,
            Power Direction established a manufacturing facility in 10th of
            Ramadan City, reinforcing our capabilities in producing high-quality
            electrical components and systems.
          </p>
        </div>
        <h1>Our Histoy</h1>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateOnce={false}
        animateIn="animate__fadeIn"
        className="about3Cont"
      >
        <h1 className="h1">About the Founder</h1>
        <div className="about3">
          <div className="chat-bubble3">
            <p>
              The founder and CEO of the Power Direction company for contracts,
              supplies and trade, Eng./ Mohamed Hassan, has transformed the
              industry with a vision rooted in integrity and innovation. With
              over 16 years of experience in the industry (2008-2023), including
              more than 7 years as a technical office manager at Lectrobar, Eng.
              Hassan brings a wealth of knowledge and leadership to our team. He
              recognized a gap in the market for streamlined procurement
              solutions that prioritize quality and efficiency. Eng./ Mohamed
              Hassan is known for his hands-on approach, fostering a
              collaborative company culture that empowers employees to excel.
              His commitment to sustainability and ethical sourcing has not only
              set the company apart but also positioned it as a leader in
              responsible business practices. Through his visionary guidance,
              the company continues to redefine standards in the contracts and
              supplies sector, ensuring that clients receive unparalleled
              service and value.
            </p>
          </div>
          <div className="founderImgCont">
            <img loading="lazy" src="/ceo.webp" alt="" />
            <h1>CEO Mohamed Hassan</h1>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="about4"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <img loading="lazy" src="/btw.webp" className="aboutshade" />
        <div className="values">
          <h1>Our Values</h1>
          <img loading="lazy" className="svg" src="values.svg" />
        </div>
      </AnimationOnScroll>

      <div className="about5">
        <h1>Our Events</h1>
        <div className="aboutevents">
          <h1>Egypt Energy Exhibition 2024</h1>
          <Events Slider={Slider} />
        </div>
        <EvImg />
      </div>
    </div>
  );
});
