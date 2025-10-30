import { memo } from "react";
import "./slider.css";
export default memo(function Slidez({ Slider }) {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        &#10094;
      </div>
    );
  };
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-next-arrow" onClick={onClick}>
        &#10095;
      </div>
    );
  };
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: false,
  };
  const slides = [
    {
      img: "/1.webp",
      loading: "eager",
    },
    {
      img: "/2.webp",
      loading: "lazy",
    },
    {
      img: "/3.webp",
      loading: "lazy",
    },
    {
      img: "/4.webp",
      loading: "lazy",
    },
    {
      img: "/5.webp",
      loading: "lazy",
    },
  ];

  return (
    <div className="slideshow-container" id="slix">
      <p className="onslider">
        We are now the Authorized Distributor of Lectrobar in Egypt
      </p>
      <img src="/btw.webp" className="shade" />
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="slide-image"
              src={slide.img}
              alt={`Slide ${index + 1}`}
              loading={slide.loading}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
});
