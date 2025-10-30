import "./styles/homea.css";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useCallback, memo } from "react";
import api from "./api";

export default memo(function Homea({ notify, buttonState, setButtonState }) {
  const sForm = useCallback(async (e) => {
    e.preventDefault();
    setButtonState([true, "none", "grey", "black"]);
    notify("info", "برجاء الانتظار");
    const formData = new FormData(document.getElementById("form"));
    await api
      .post("/submit.php", formData)
      .then((data) => {
        if (data.data === "Message sent successfully!") {
          notify("success", "تم ارسال رسالتكم بنجاح");
          document.getElementById("form").reset();
          setButtonState([false, "all", "white", "black"]);
        } else {
          notify("error", "فشل الارسال, برجاء المحاولة مرة أخرى");
          setButtonState([false, "all", "white", "black"]);
        }
      })
      .catch(() => {
        notify("error", "خطأ من السيرفر, برجاء المحاولة مرة أخرى");
        setButtonState([false, "all", "white", "black"]);
      });
  },[]);
  return (
    <div className="hm">
      <AnimationOnScroll
        className="ahm1"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <h2>يتم توفير الحلول المثلى دائمًا بواسطة باور دايركشن</h2>
        <p>
          باور دايركشن هي شركة متميزة في مجال الكهرباء والمقاولات في مصر نفخر
          بتقديم حلول عالية الكفاءة عبر المقاولات والتوريدات والصيانة، دائما
          نتكيف مع متطلبات السوق دون المساومة على الأسعار. تركيزنا على تقديم
          حلول مبتكرة وفعالة، جنبا إلى جنب مع خبراء إدارة المشاريع وتصميمها
          لتلبية احتياجات عملائنا المتطورة.
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="ahm2"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <h2>عن الخدمات التي تقدمها باور دايركشن</h2>
        <p>
          باور دايركشن هي الموزع المعتمد لشركة لكتروبار في مصر، والتي توفر توريد
          وتركيب وصيانة هذه العناصر:
        </p>
        <div className="ahm2flex">
          <div className="ahm2grd">
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm21.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm22.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm23.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm24.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm25.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm26.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm27.webp" alt="" />
            </div>
            <div className="ahm2imgcont">
              <img loading="lazy" src="/btw2.webp" alt="" className="ashadec" />
              <img loading="lazy" src="/hm28.webp" alt="" />
            </div>
          </div>
          <div className="ahm2side">
            <h3>خدماتنا:</h3>
            <Link to="/services#Distributers">الموزعات &rarr; </Link>
            <Link to="/services#RMU">RMU &rarr; </Link>
            <Link to="/services#Kiosks">الأكشاك &rarr; </Link>
            <Link to="/services#Transformers">المحولات &rarr; </Link>
            <Link to="/services#Generators">المولدات &rarr; </Link>
            <Link to="/services#Busbar">Busbar &rarr; </Link>
            <Link to="/services#LowVoltagePanels">
              اللوحات منخفضة الجهد &rarr;
            </Link>
            <Link to="/services#CableTrays">صواني الكابلات &rarr; </Link>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="aformcont"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <div className="aform">
          <img loading="lazy" src="/logow.webp" alt="" />
          <p>تواصل معنا</p>
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
              value="إرسال"
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
