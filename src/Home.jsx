import "./styles/home.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useCallback, memo } from "react";
import api from "./api";

export default memo(function Home({ notify, buttonState, setButtonState }) {
  const sForm = useCallback(async (e) => {
    e.preventDefault();
    setButtonState([true, "none", "grey", "black"]);
    notify("info", "Please Wait...");
    const formData = new FormData(document.getElementById("form"));
    await api
      .post("/submit.php", formData)
      .then((data) => {
        if (data.data === "Message sent successfully!") {
          notify("success", "Message Sent Successfully!");
          document.getElementById("form").reset();
          setButtonState([false, "all", "white", "black"]);
        } else {
          notify("error", "Failed to Send Message, Please Try Again");
          setButtonState([false, "all", "white", "black"]);
        }
      })
      .catch(() => {
        notify("error", "Server Error, Please Try Again");
        setButtonState([false, "all", "white", "black"]);
      });
  },[]);

  return (
    <div className="hm">
      <AnimationOnScroll
        className="hm1"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <h2>Optimal Solutions are always Provided by Power Direction</h2>
        <p>
          Power Direction is a distinguished player in the field of electrical
          contracting in Egypt. We pride ourselves on delivering high-efficiency
          solutions across contracting, supplies, and maintenance, all while
          adapting to market demands without compromising on pricing. Our focus
          is on offering innovative and effective solutions, along with expert
          project management and design to meet our clients’ evolving needs.
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="hm2"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <h2>About Services Power Direction Provides!</h2>
        <p>
          Power Direction is the authorized distributor of Lectrobar in Egypt,
          which provides supply, installation, and maintenance of these items:
        </p>
        <div className="hm2flex">
          <div className="hm2grd">
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm21.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm22.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm23.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm24.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm25.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm26.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm27.webp" alt="" />
            </div>
            <div className="hm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="shadec" />
              <img loading="lazy" src="/hm28.webp" alt="" />
            </div>
          </div>
          <div className="hm2side">
            <h3>Our Services</h3>
            <Link to="/services#Distributers">Distributers &rarr; </Link>
            <Link to="/services#RMU">RMU &rarr; </Link>
            <Link to="/services#Kiosks">Kiosks &rarr; </Link>
            <Link to="/services#Transformers">Transformers &rarr; </Link>
            <Link to="/services#Generators">Generators &rarr; </Link>
            <Link to="/services#Busbar">Busbar &rarr; </Link>
            <Link to="/services#LowVoltagePanels">
              Low Voltage Panels &rarr;
            </Link>
            <Link to="/services#CableTrays">Cable Trays &rarr; </Link>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="formcont"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <div className="form">
          <img loading="lazy" src="/logow.webp" alt="" />
          <p>Get in Touch With Us!</p>
          <form onSubmit={sForm} method="POST" id="form">
            <input
              required
              type="text"
              id="name"
              name="name"
              placeholder="Name / الاسم"
            />

            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="E-mail / الايميل"
            />

            <input
              required
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your Phone Number / رقم التليفون"
            />

            <textarea
              required
              id="message"
              name="message"
              placeholder="Your Message / رسالتك"
            ></textarea>

            <input
              type="submit"
              value="Submit"
              disabled={buttonState[0]}
              style={{
                backgroundColor: buttonState[2],
                pointerEvents: buttonState[1],
                color: buttonState[3],
              }}
              onMouseOver={() => {
                if (buttonState[0]) return;
                else {
                  setButtonState([false, "all", "goldenrod", "white"]);
                }
              }}
              onMouseOut={() => {
                if (buttonState[0]) return;
                else {
                  setButtonState([false, "all", "white", "black"]);
                }
              }}
            />
          </form>
        </div>
      </AnimationOnScroll>
    </div>
  );
});
