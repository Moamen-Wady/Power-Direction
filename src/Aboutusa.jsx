import "./styles/abouta.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect, useState, memo, useLayoutEffect } from "react";
import Slidezaba from "./components/slideraba";
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
      <div className="aaboutclcont">
        <div className="aaboutcl">
          <div className="aaboutclimg">
            <button id="sleft" className="aaboutclbtn" onClick={clifwd}>
              <img loading="lazy" src="l.webp" alt=" " />
            </button>
            <div className="asslide" id="sslide1">
              <img loading="lazy" src="/ev6.webp" alt="" />
            </div>
            <div className="asslide" id="sslide2">
              <img loading="lazy" src="/ev7.webp" alt="" />
            </div>
            <div className="asslide" id="sslide3">
              <img loading="lazy" src="/ev8.webp" alt="" />
            </div>
            <div className="asslide" id="sslide4">
              <img loading="lazy" src="/ev9.webp" alt="" />
            </div>
            <div className="asslide" id="sslide5">
              <img loading="lazy" src="/ev10.webp" alt="" />
            </div>
            <div className="asslide" id="sslide6">
              <img loading="lazy" src="/ev11.webp" alt="" />
            </div>
            <div className="asslide" id="sslide7">
              <img loading="lazy" src="/ev12.webp" alt="" />
            </div>
            <div className="asslide" id="sslide8">
              <img loading="lazy" src="/ev13.webp" alt="" />
            </div>
            <button id="sright" className="aaboutclbtn" onClick={clibwd}>
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
      className="aaboutslideshow-container"
      animateOnce={false}
      animateIn="animate__fadeIn"
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={`SlideImg ${index + 1}`}>
            <img
              className="aaboutslide-image"
              src={slide.img}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </AnimationOnScroll>
  );
});
export default memo(function Aboutusa({ Slider }) {
  useLayoutEffect(() => {
    let oldSlider = document.getElementById("slix");
    if (oldSlider) {
      oldSlider.style.display = "none";
    }
    return () => (oldSlider.style.display = "block");
  }, []);
  return (
    <div className="aabout">
      <Slidezaba />
      <AnimationOnScroll
        className="aabout1"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <div className="achat-bubble">
          <p>
            رؤيتنا هي أن نكون الشركة الرائدة في مجال المقاولات الكهربائية من
            خلال تحقيق الكفاءة التشغيلية باستمرار. باور دايركشن مكرسة لتوفير
            حلول مبتكرة ومستقرة وفعالة من حيث التكلفة والتي تحمي عملائنا من
            تقلبات السوق. نحن نهدف لإعادة تعريف إدارة المشاريع المهنية والتصميم
            داخل هذه الصناعة.
          </p>
        </div>
        <h1>رؤيتنا</h1>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="aabout2"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <div className="achat-bubble">
          <p>
            تأسست شركة باور دايركشن في عام 2023، وبرزت كشركة ناشئة موثوقة
            ملتزمون بالتميز في التركيبات الكهربائية. مع مرور الوقت، قمنا بتوسيع
            عروضنا لتشمل الحلول الشاملة لأنظمة التوزيع والمكونات الكهربائية
            المتقدمة. نمونا قد كان مدفوعًا بالابتكار والاستدامة، مما يضعنا في
            مكانة رائدة كقوة تحويلية في الصناعة الكهربائية في مصر. في عام 2024
            أنشأت باور دايركشن منشأة تصنيع في العاشر من رمضان، مما يعزز قدراتنا
            في إنتاج عالي الجودة المكونات والأنظمة الكهربائية.
          </p>
        </div>
        <h1>تاريخنا</h1>
      </AnimationOnScroll>

      <AnimationOnScroll
        animateOnce={false}
        animateIn="animate__fadeIn"
        className="aabout3Cont"
      >
        <h1 className="ah1">عن المؤسس</h1>
        <div className="aabout3">
          <div className="achat-bubble3">
            <p>
              المؤسس والرئيس التنفيذي لشركة باور دايركشن للمقاولات، للتوريدات
              والتجارة المهندس/ محمد حسن حول الصناعة إلى واحدة ذات رؤية متجذرة
              في النزاهة والابتكار. مع أكثر من 16 عامًا من الخبرة في الصناعة
              (2008-2024)، بما في ذلك أكثر من 7 سنوات كمدير للمكتب الفني في شركة
              لكتروبار . يجلب حسن ثروة من المعرفة والقيادة لفريقنا. لاحظ وجود
              فجوة في السوق لتبسيط المشتريات والحلول التي تعطي الأولوية للجودة
              والكفاءة. المهندس/ محمد يشتهر بأسلوبه العملي في تعزيز ثقافة الشركة
              التعاونية التي تمكن الموظفين من التفوق. إن التزامه بالاستدامة
              والمصادر الأخلاقية لم يقتصر على ذلك فحسب بل ميز الشركة عن غيرها
              ووضعها أيضًا كشركة رائدة في الممارسات التجارية المسؤولة. من خلال
              توجيهاته البصيرة، تواصل الشركة إعادة تحديد المعايير في العقود و
              قطاع الإمدادات، مما يضمن حصول العملاء على خدمات لا مثيل لها في
              الخدمة والقيمة.
            </p>
          </div>
          <div className="afounderImgCont">
            <img loading="lazy" src="/ceo.webp" alt="" />
            <h1>المدير التنفيذي محمد حسن</h1>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="aabout4"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <img loading="lazy" src="/btw.webp" className="aaboutshade" />
        <div className="avalues">
          <h1>قيمنا المهنية</h1>
          <img loading="lazy" className="asvg" src="arvalues.svg" />
        </div>
      </AnimationOnScroll>
      <div className="aabout5">
        <h1>أحداثنا وفعالياتنا</h1>
        <div className="aaboutevents">
          <h1>معرض مصر للطاقة 2024</h1>
          <Events Slider={Slider} />
        </div>
        <EvImg />
      </div>
    </div>
  );
});
