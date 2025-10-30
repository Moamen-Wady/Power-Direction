import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles/servicesa.css";
import { useEffect, useState } from "react";

export default function Servicesa() {
  const [ServicesList, setSList] = useState(<></>);

  useEffect(() => {
    function handleLayout() {
      let swidth = window.innerWidth;
      if (swidth <= 560) {
        setSList(
          <div className="asrv1flex" id="srvflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm21.webp" alt="" />
                <span id="Distributerss">
                  <h3 id="Distributersh">الموزعات</h3>
                  <p>
                    في المرحلة النهائية من توصيل الكهرباء. يتم نقلها من نظام
                    النقل إلى المستهلكين. تتصل محطات التوزيع الفرعية بـ نظام
                    النقل ويتم خفض جهد الإرسال إلى جهد متوسط يتراوح ما بين 2
                    كيلو فولت إلى 33 كيلو فولت باستخدام محولات.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm23.webp" alt="" />
                <span id="RMUs">
                  <h3 id="RMUh">الوحدة الرئيسية الحلقية</h3>
                  <p>
                    الوحدة الرئيسية الحلقية عبارة عن مجموعة مفاتيح مدمجة ومغلفة
                    بالمعدن تستخدم لتطبيقات التوزيع الثانوي في شبكات الجهد
                    المتوسط تتراوح عادة من 11 كيلو فولت إلى 36 كيلو فولت. إنها
                    مصممة من أجل الموثوقية والسلامة والمرونة، مما يجعلها مثالية
                    للاستخدام في المجالات الصناعية والتجارية والمرافق .
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm22.webp" alt="" />
                <span id="Kioskss">
                  <h3 id="Kiosksh">الأكشاك</h3>
                  <p>
                    إنشاءات منفصلة يمكن استخدامها لتخزين مختلف المكونات
                    الكهربائية، بما في ذلك لوحات المفاتيح والتوزيع الأنظمة
                    والأجهزة الأخرى.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm24.webp" alt="" />
                <span id="Transformerss">
                  <h3 id="Transformersh">المحولات</h3>
                  <p>
                    المحولات هي أجهزة كهربائية تستخدم لخفض أو رفع مستويات الجهد
                    في نطاق الجهد المتوسط، عادة بين 1 كيلو فولت و36 كيلو فولت.
                    فهي حاسمة في أنظمة التوزيع الصناعية والتجارية والمرافقية مما
                    يتيح النقل الفعال للطاقة على مسافات متوسطة مع ضمان الجهد
                    المناسب لمستويات المعدات أو الأحمال النهائية.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm25.webp" alt="" />
                <span id="Generatorss">
                  <h3 id="Generatorsh">المولدات</h3>
                  <p>
                    المولدات هي أجهزة كهربائية مصممة لإنتاج الطاقة. تتراوح
                    الفولتية عادة من 400 فولت إلى 1000 فولت، وهي مناسبة لـ
                    الاستخدام المباشر في أنظمة الجهد المنخفض. هذه المولدات
                    تستخدم عادة في المنشئات سكنية والتجارية والصناعية لتوفير
                    الطاقة أثناء انقطاع التيار الكهربائي أو خارج الشبكة
                    سيناريوهات.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm26.webp" alt="" />
                <span id="Busbars">
                  <h3 id="Busbarh">بسبار</h3>
                  <p>
                    قناة الناقل ذات الجهد المنخفض هي نظام توزيع كهربائي تستخدم
                    لنقل الطاقة الكهربائية بكفاءة في الجهد المنخفض عادة تحت 1000
                    فولت. إنه بديل لأنظمة الأسلاك التقليدية القائمة على الكابلات
                    يشيع استخدامها في المنشآت الصناعية والتجارية المباني ومحطات
                    الطاقة لموثوقيتها ومرونتها، وسهولة التركيب.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm27.webp" alt="" />
                <span id="LowVoltagePanelss">
                  <h3 id="LowVoltagePanelsh">لوحات الجهد المنخفض</h3>
                  <p>
                    لوحات Chint ذات الجهد المنخفض هي توزيع الكهرباء و لوحات
                    التحكم من تصميم شركة Chint Group وتصنيعها بواسطة ليكتروبار
                    في مصر الشركة العالمية الرائدة في مجال تصنيع المعدات
                    الكهربائية . وتستخدم هذه الألواح على نطاق واسع في الصناعة،
                    القطاعات التجارية والسكنية لإدارة وتوزيع الطاقة الكهربائية
                    بكفاءة وأمان.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvmobile"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span id="CableTrayss">
                  <h3 id="CableTraysh">صواني الكابلات</h3>
                  <p>
                    أنظمة حوامل الكابلات هي أنظمة دعم هيكلية مصممة خصيصًا لـ عقد
                    وتوجيه الكابلات الكهربائية في المجالات الصناعية والتجارية،
                    والإعدادات السكنية. أنها طريقة منظمة وآمنة لإدارة الأسلاك
                    الكهربائية والاتصالات ضمان سهولة التثبيت والصيانة وقابلية
                    التوسع.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else if (swidth <= 768) {
        setSList(
          <div className="asrv1flex" id="srvflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvtablet"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm21.webp" alt="" />
                <span id="Distributerss">
                  <h3 id="Distributersh">الموزعات</h3>
                  <p>
                    في المرحلة النهائية من توصيل الكهرباء. يتم نقلها من نظام
                    النقل إلى المستهلكين. تتصل محطات التوزيع الفرعية بـ نظام
                    النقل ويتم خفض جهد الإرسال إلى جهد متوسط يتراوح ما بين 2
                    كيلو فولت إلى 33 كيلو فولت باستخدام محولات.
                  </p>
                </span>
              </div>
              <div className="asrvcard">
                <img loading="lazy" src="/hm23.webp" alt="" />
                <span id="RMUs">
                  <h3 id="RMUh">الوحدة الرئيسية الحلقية</h3>
                  <p>
                    الوحدة الرئيسية الحلقية عبارة عن مجموعة مفاتيح مدمجة ومغلفة
                    بالمعدن تستخدم لتطبيقات التوزيع الثانوي في شبكات الجهد
                    المتوسط تتراوح عادة من 11 كيلو فولت إلى 36 كيلو فولت. إنها
                    مصممة من أجل الموثوقية والسلامة والمرونة، مما يجعلها مثالية
                    للاستخدام في المجالات الصناعية والتجارية والمرافق .
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvtablet"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm22.webp" alt="" />
                <span id="Kioskss">
                  <h3 id="Kiosksh">الأكشاك</h3>
                  <p>
                    إنشاءات منفصلة يمكن استخدامها لتخزين مختلف المكونات
                    الكهربائية، بما في ذلك لوحات المفاتيح والتوزيع الأنظمة
                    والأجهزة الأخرى.
                  </p>
                </span>
              </div>
              <div className="asrvcard">
                <img loading="lazy" src="/hm24.webp" alt="" />
                <span id="Transformerss">
                  <h3 id="Transformersh">المحولات</h3>
                  <p>
                    المحولات هي أجهزة كهربائية تستخدم لخفض أو رفع مستويات الجهد
                    في نطاق الجهد المتوسط، عادة بين 1 كيلو فولت و36 كيلو فولت.
                    فهي حاسمة في أنظمة التوزيع الصناعية والتجارية والمرافقية مما
                    يتيح النقل الفعال للطاقة على مسافات متوسطة مع ضمان الجهد
                    المناسب لمستويات المعدات أو الأحمال النهائية.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvtablet"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm25.webp" alt="" />
                <span id="Generatorss">
                  <h3 id="Generatorsh">المولدات</h3>
                  <p>
                    المولدات هي أجهزة كهربائية مصممة لإنتاج الطاقة. تتراوح
                    الفولتية عادة من 400 فولت إلى 1000 فولت، وهي مناسبة لـ
                    الاستخدام المباشر في أنظمة الجهد المنخفض. هذه المولدات
                    تستخدم عادة في المنشئات سكنية والتجارية والصناعية لتوفير
                    الطاقة أثناء انقطاع التيار الكهربائي أو خارج الشبكة
                    سيناريوهات.
                  </p>
                </span>
              </div>
              <div className="asrvcard">
                <img loading="lazy" src="/hm26.webp" alt="" />
                <span id="Busbars">
                  <h3 id="Busbarh">بسبار</h3>
                  <p>
                    قناة الناقل ذات الجهد المنخفض هي نظام توزيع كهربائي تستخدم
                    لنقل الطاقة الكهربائية بكفاءة في الجهد المنخفض عادة تحت 1000
                    فولت. إنه بديل لأنظمة الأسلاك التقليدية القائمة على الكابلات
                    يشيع استخدامها في المنشآت الصناعية والتجارية المباني ومحطات
                    الطاقة لموثوقيتها ومرونتها، وسهولة التركيب.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvtablet"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm27.webp" alt="" />
                <span id="LowVoltagePanelss">
                  <h3 id="LowVoltagePanelsh">لوحات الجهد المنخفض</h3>
                  <p>
                    لوحات Chint ذات الجهد المنخفض هي توزيع الكهرباء و لوحات
                    التحكم من تصميم شركة Chint Group وتصنيعها بواسطة ليكتروبار
                    في مصر الشركة العالمية الرائدة في مجال تصنيع المعدات
                    الكهربائية . وتستخدم هذه الألواح على نطاق واسع في الصناعة،
                    القطاعات التجارية والسكنية لإدارة وتوزيع الطاقة الكهربائية
                    بكفاءة وأمان.
                  </p>
                </span>
              </div>
              <div className="asrvcard">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span id="CableTrayss">
                  <h3 id="CableTraysh">صواني الكابلات</h3>
                  <p>
                    أنظمة حوامل الكابلات هي أنظمة دعم هيكلية مصممة خصيصًا لـ عقد
                    وتوجيه الكابلات الكهربائية في المجالات الصناعية والتجارية،
                    والإعدادات السكنية. أنها طريقة منظمة وآمنة لإدارة الأسلاك
                    الكهربائية والاتصالات ضمان سهولة التثبيت والصيانة وقابلية
                    التوسع.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else {
        setSList(
          <div className="asrv1flex" id="srvflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvdesktop"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm21.webp" alt="" />
                <span id="Distributerss">
                  <h3 id="Distributersh">الموزعات</h3>
                  <p>
                    في المرحلة النهائية من توصيل الكهرباء. يتم نقلها من نظام
                    النقل إلى المستهلكين. تتصل محطات التوزيع الفرعية بـ نظام
                    النقل ويتم خفض جهد الإرسال إلى جهد متوسط يتراوح ما بين 2
                    كيلو فولت إلى 33 كيلو فولت باستخدام محولات.
                  </p>
                </span>
              </div>

              <div className="asrvcard">
                <img loading="lazy" src="/hm23.webp" alt="" />
                <span id="RMUs">
                  <h3 id="RMUh">الوحدة الرئيسية الحلقية</h3>
                  <p>
                    الوحدة الرئيسية الحلقية عبارة عن مجموعة مفاتيح مدمجة ومغلفة
                    بالمعدن تستخدم لتطبيقات التوزيع الثانوي في شبكات الجهد
                    المتوسط تتراوح عادة من 11 كيلو فولت إلى 36 كيلو فولت. إنها
                    مصممة من أجل الموثوقية والسلامة والمرونة، مما يجعلها مثالية
                    للاستخدام في المجالات الصناعية والتجارية والمرافق .
                  </p>
                </span>
              </div>
              <div className="asrvcard">
                <img loading="lazy" src="/hm22.webp" alt="" />
                <span id="Kioskss">
                  <h3 id="Kiosksh">الأكشاك</h3>
                  <p>
                    إنشاءات منفصلة يمكن استخدامها لتخزين مختلف المكونات
                    الكهربائية، بما في ذلك لوحات المفاتيح والتوزيع الأنظمة
                    والأجهزة الأخرى.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvdesktop"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm24.webp" alt="" />
                <span id="Transformerss">
                  <h3 id="Transformersh">المحولات</h3>
                  <p>
                    المحولات هي أجهزة كهربائية تستخدم لخفض أو رفع مستويات الجهد
                    في نطاق الجهد المتوسط، عادة بين 1 كيلو فولت و36 كيلو فولت.
                    فهي حاسمة في أنظمة التوزيع الصناعية والتجارية والمرافقية مما
                    يتيح النقل الفعال للطاقة على مسافات متوسطة مع ضمان الجهد
                    المناسب لمستويات المعدات أو الأحمال النهائية.
                  </p>
                </span>
              </div>

              <div className="asrvcard">
                <img loading="lazy" src="/hm25.webp" alt="" />
                <span id="Generatorss">
                  <h3 id="Generatorsh">المولدات</h3>
                  <p>
                    المولدات هي أجهزة كهربائية مصممة لإنتاج الطاقة. تتراوح
                    الفولتية عادة من 400 فولت إلى 1000 فولت، وهي مناسبة لـ
                    الاستخدام المباشر في أنظمة الجهد المنخفض. هذه المولدات
                    تستخدم عادة في المنشئات سكنية والتجارية والصناعية لتوفير
                    الطاقة أثناء انقطاع التيار الكهربائي أو خارج الشبكة
                    سيناريوهات.
                  </p>
                </span>
              </div>

              <div className="asrvcard">
                <img loading="lazy" src="/hm26.webp" alt="" />
                <span id="Busbars">
                  <h3 id="Busbarh">بسبار</h3>
                  <p>
                    قناة الناقل ذات الجهد المنخفض هي نظام توزيع كهربائي تستخدم
                    لنقل الطاقة الكهربائية بكفاءة في الجهد المنخفض عادة تحت 1000
                    فولت. إنه بديل لأنظمة الأسلاك التقليدية القائمة على الكابلات
                    يشيع استخدامها في المنشآت الصناعية والتجارية المباني ومحطات
                    الطاقة لموثوقيتها ومرونتها، وسهولة التركيب.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="asrvdesktop"
            >
              <div className="asrvcard">
                <img loading="lazy" src="/hm27.webp" alt="" />
                <span id="LowVoltagePanelss">
                  <h3 id="LowVoltagePanelsh">لوحات الجهد المنخفض</h3>
                  <p>
                    لوحات Chint ذات الجهد المنخفض هي توزيع الكهرباء و لوحات
                    التحكم من تصميم شركة Chint Group وتصنيعها بواسطة ليكتروبار
                    في مصر الشركة العالمية الرائدة في مجال تصنيع المعدات
                    الكهربائية . وتستخدم هذه الألواح على نطاق واسع في الصناعة،
                    القطاعات التجارية والسكنية لإدارة وتوزيع الطاقة الكهربائية
                    بكفاءة وأمان.
                  </p>
                </span>
              </div>

              <div className="asrvcard">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span id="CableTrayss">
                  <h3 id="CableTraysh">صواني الكابلات</h3>
                  <p>
                    أنظمة حوامل الكابلات هي أنظمة دعم هيكلية مصممة خصيصًا لـ عقد
                    وتوجيه الكابلات الكهربائية في المجالات الصناعية والتجارية،
                    والإعدادات السكنية. أنها طريقة منظمة وآمنة لإدارة الأسلاك
                    الكهربائية والاتصالات ضمان سهولة التثبيت والصيانة وقابلية
                    التوسع.
                  </p>
                </span>
              </div>
              <div className="asrvcard hidden">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span>
                  <h3>صواني الكابلات</h3>
                  <p>
                    أنظمة حوامل الكابلات هي أنظمة دعم هيكلية مصممة خصيصًا لـ عقد
                    وتوجيه الكابلات الكهربائية في المجالات الصناعية والتجارية،
                    والإعدادات السكنية. أنها طريقة منظمة وآمنة لإدارة الأسلاك
                    الكهربائية والاتصالات ضمان سهولة التثبيت والصيانة وقابلية
                    التوسع.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
          </div>
        );
      }
    }
    window.screen.orientation.addEventListener("change", handleLayout);
    handleLayout();
    return () =>
      window.screen.orientation.removeEventListener("change", handleLayout);
  }, []);
  useEffect(() => {
    let p = window.location.hash;
    let spann = document.getElementById(p.slice(1) + "s");
    let h1h = document.getElementById(p.slice(1) + "h");
    if (p && spann && h1h) {
      spann.style.animationName = "highlightSpan";
      h1h.style.animationName = "highlightH3";
      setTimeout(() => {
        document.getElementById(p.slice(1) + "s")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
          duration: 10,
        });
      }, 100);
    }
  }, [ServicesList]);
  return (
    <div className="asrv">
      <div className="asrv1">
        <h3>
          شركة باور ديركشن متخصصة في توريد وتركيب و صيانة المعدات الكهربائية
          الأساسية. مثل:
        </h3>
        {ServicesList}
      </div>

      <AnimationOnScroll
        className="asrv2"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <h3>
          بالإضافة إلى ذلك، يتضمن مدانا مجموعة متنوعة من اللوحات المحلية (لوحات
          الموزعات, لوحات القياس, لوحات الخدمات, وأخرى...)
        </h3>
        <div className="asrvcl">
          <img loading="lazy" src="/cl1.webp" alt="" />
          <img loading="lazy" src="/cl2.webp" alt="" />
          <img loading="lazy" src="/cl3.webp" alt="" />
          <img loading="lazy" src="/cl4.webp" alt="" />
          <img loading="lazy" src="/cl5.webp" alt="" />
          <img loading="lazy" src="/cl6.webp" alt="" />
          <img loading="lazy" src="/cl7.webp" alt="" />
          <img loading="lazy" src="/cl8.webp" alt="" />
          <img loading="lazy" src="/cl9.webp" alt="" />
        </div>
      </AnimationOnScroll>
    </div>
  );
}
