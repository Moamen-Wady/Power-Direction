import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles/projectsa.css";
import { useEffect, useState, memo } from "react";

export default function Projectsa() {
  const [ServicesList, setSList] = useState(<></>);
  useEffect(() => {
    function handleLayout() {
      let swidth = window.innerWidth;
      if (swidth <= 560) {
        setSList(
          <div className="aprj1flex" id="aprjflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>ديجويا ١و٢و٣ العاصمة الادارية</h2>
                <p>شركة تاج مصر</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>مصنع شاومي السادس من اكتوبر</h2>
                <p>Etsal Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>مول بينكل التجمع الخامس</h2>
                <p>شركة بينكل</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>المنطقة اللوجستية بالعين السخنة</h2>
                <p>شركة كرامة</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>فندق سفير مطروح</h2>
                <p>شركة الصفا للمقاولات</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>بيت العقل - الحي الخامس - القطامية</h2>
                <p>شركة دار الكهرباء</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>جزارة دمياط</h2>
                <p>شركية كير للمقاولات</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>قرية سيا فيلاجيو مارينا</h2>
                <p>شركة المطورين العرب</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>الفا فروست</h2>
                <p>المجموعة التقنية مصر</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>مصنع يونيفرسال</h2>
                <p>مجموعة الشبكي</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>مزرعة طائرات القوات الجوية</h2>
                <p>سينوما</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>مجمع محاكم الوادي الجديد</h2>
                <p>شركة المعادي</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>ميثودي للالكترونيات</h2>
                <p>منطقة النصر الحرة</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>مصنع اسمنت العين السخنة</h2>
                <p>ريلاينس للصناعات الثقيلة</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>داون تاون العرب بورسعيد</h2>
                <p>كابيتال للاستشارات</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjmobile"
            >
              <div className="aprjcard">
                <h2>ماونتن فيو</h2>
                <p>الشركة المتحدة</p>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else if (swidth <= 768) {
        setSList(
          <div className="aprj1flex" id="aprjflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>ديجويا ١و٢و٣ العاصمة الادارية</h2>
                <p>شركة تاج مصر</p>
              </div>
              <div className="aprjcard">
                <h2>مصنع شاومي السادس من اكتوبر</h2>
                <p>Etsal Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>مول بينكل التجمع الخامس</h2>
                <p>شركة بينكل</p>
              </div>
              <div className="aprjcard">
                <h2>المنطقة اللوجستية بالعين السخنة</h2>
                <p>شركة كرامة</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>فندق سفير مطروح</h2>
                <p>شركة الصفا للمقاولات</p>
              </div>
              <div className="aprjcard">
                <h2>بيت العقل - الحي الخامس - القطامية</h2>
                <p>شركة دار الكهرباء</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>جزارة دمياط</h2>
                <p>شركية كير للمقاولات</p>
              </div>
              <div className="aprjcard">
                <h2>قرية سيا فيلاجيو مارينا</h2>
                <p>شركة المطورين العرب</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>الفا فروست</h2>
                <p>المجموعة التقنية مصر</p>
              </div>
              <div className="aprjcard">
                <h2>مصنع يونيفرسال</h2>
                <p>مجموعة الشبكي</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>مزرعة طائرات القوات الجوية</h2>
                <p>سينوما</p>
              </div>
              <div className="aprjcard">
                <h2>مجمع محاكم الوادي الجديد</h2>
                <p>شركة المعادي</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>ميثودي للالكترونيات</h2>
                <p>منطقة النصر الحرة</p>
              </div>
              <div className="aprjcard">
                <h2>مصنع اسمنت العين السخنة</h2>
                <p>ريلاينس للصناعات الثقيلة</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjtablet"
            >
              <div className="aprjcard">
                <h2>داون تاون العرب بورسعيد</h2>
                <p>كابيتال للاستشارات</p>
              </div>
              <div className="aprjcard">
                <h2>ماونتن فيو</h2>
                <p>الشركة المتحدة</p>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else {
        setSList(
          <div className="aprj1flex" id="aprjflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjdesktop"
            >
              <div className="aprjcard">
                <h2>ديجويا ١و٢و٣ العاصمة الادارية</h2>
                <p>شركة تاج مصر</p>
              </div>

              <div className="aprjcard">
                <h2>مصنع شاومي السادس من اكتوبر</h2>
                <p>Etsal Co.</p>
              </div>
              <div className="aprjcard">
                <h2>مول بينكل التجمع الخامس</h2>
                <p>شركة بينكل</p>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjdesktop"
            >
              <div className="aprjcard">
                <h2>المنطقة اللوجستية بالعين السخنة</h2>
                <p>شركة كرامة</p>
              </div>

              <div className="aprjcard">
                <h2>فندق سفير مطروح</h2>
                <p>شركة الصفا للمقاولات</p>
              </div>

              <div className="aprjcard">
                <h2>بيت العقل - الحي الخامس - القطامية</h2>
                <p>شركة دار الكهرباء</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjdesktop"
            >
              <div className="aprjcard">
                <h2>جزارة دمياط</h2>
                <p>شركية كير للمقاولات</p>
              </div>

              <div className="aprjcard">
                <h2>قرية سيا فيلاجيو مارينا</h2>
                <p>شركة المطورين العرب</p>
              </div>
              <div className="aprjcard">
                <h2>الفا فروست</h2>
                <p>المجموعة التقنية مصر</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjdesktop"
            >
              <div className="aprjcard">
                <h2>مصنع يونيفرسال</h2>
                <p>مجموعة الشبكي</p>
              </div>
              <div className="aprjcard">
                <h2>مزرعة طائرات القوات الجوية</h2>
                <p>سينوما</p>
              </div>
              <div className="aprjcard">
                <h2>مجمع محاكم الوادي الجديد</h2>
                <p>شركة المعادي</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjdesktop"
            >
              <div className="aprjcard">
                <h2>ميثودي للالكترونيات</h2>
                <p>منطقة النصر الحرة</p>
              </div>
              <div className="aprjcard">
                <h2>مصنع اسمنت العين السخنة</h2>
                <p>ريلاينس للصناعات الثقيلة</p>
              </div>
              <div className="aprjcard">
                <h2>داون تاون العرب بورسعيد</h2>
                <p>كابيتال للاستشارات</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="aprjdesktop"
            >
              <div className="aprjcard">
                <h2>ماونتن فيو</h2>
                <p>الشركة المتحدة</p>
              </div>
              <div className="aprjcard hidden">
                <h2>قرية سيا فيلاجيو مارينا</h2>
                <p>شركة المطورين العرب</p>
              </div>
              <div className="aprjcard hidden">
                <h2>قرية سيا فيلاجيو مارينا</h2>
                <p>شركة المطورين العرب</p>
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
  return (
    <div className="aprj">
      <div className="aprj1">
        <h1>مشاريعنا</h1>
        {ServicesList}
      </div>
    </div>
  );
};
