import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles/projects.css";
import { useEffect, useState, memo } from "react";

export default function Projects() {
  const [ServicesList, setSList] = useState(<></>);
  useEffect(() => {
    function handleLayout() {
      let swidth = window.innerWidth;
      if (swidth <= 560) {
        setSList(
          <div className="prj1flex" id="prjflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Dejoya 1, 2 & 3 Capital Administration</h2>
                <p>Taj Misr Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Xiaomi Factory, 6th of October</h2>
                <p>Etsal Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Benkel Mall, 5th Settlement</h2>
                <p>Benkel Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Ain Sokhna Logistics Zone</h2>
                <p>Karama Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Safir Matrouh Hotel</h2>
                <p>Al Safa Contracting Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Mind House -District 5 - Katamia</h2>
                <p>Dar Elkahraba Co</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Damietta Slaughterhouse</h2>
                <p>Care Contracting Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Sia Villaggio Marina</h2>
                <p>Arab Developers Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Alfa Frost</h2>
                <p>Tech Groups Egypt</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Universal Factory</h2>
                <p>Shobaky Electric Group</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Egypt Air Force Farm</h2>
                <p>Sinoma</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>New Valley Courts Complex</h2>
                <p>Maadi Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Methode Electronics Egypt</h2>
                <p>El Nasr Free Zone</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Ain Sokhna Cement Factory</h2>
                <p>Reliance for Heavy Industries</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Downtown Al Arab Port Said project</h2>
                <p>Capital Consult</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjmobile"
            >
              <div className="prjcard">
                <h2>Mountain View</h2>
                <p>United Co.</p>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else if (swidth <= 768) {
        setSList(
          <div className="prj1flex" id="prjflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Dejoya 1, 2 & 3 Capital Administration</h2>
                <p>Taj Misr Co.</p>
              </div>
              <div className="prjcard">
                <h2>Xiaomi Factory, 6th of October</h2>
                <p>Etsal Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Benkel Mall, 5th Settlement</h2>
                <p>Benkel Co.</p>
              </div>
              <div className="prjcard">
                <h2>Ain Sokhna Logistics Zone</h2>
                <p>Karama Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Safir Matrouh Hotel</h2>
                <p>Al Safa Contracting Co.</p>
              </div>
              <div className="prjcard">
                <h2>Mind House -District 5 - Katamia</h2>
                <p>Dar Elkahraba Co</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Damietta Slaughterhouse</h2>
                <p>Care Contracting Co.</p>
              </div>
              <div className="prjcard">
                <h2>Sia Villaggio Marina</h2>
                <p>Arab Developers Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Alfa Frost</h2>
                <p>Tech Groups Egypt</p>
              </div>
              <div className="prjcard">
                <h2>Universal Factory</h2>
                <p>Shobaky Electric Group</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Egypt Air Force Farm</h2>
                <p>Sinoma</p>
              </div>
              <div className="prjcard">
                <h2>New Valley Courts Complex</h2>
                <p>Maadi Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Methode Electronics Egypt</h2>
                <p>El Nasr Free Zone</p>
              </div>
              <div className="prjcard">
                <h2>Ain Sokhna Cement Factory</h2>
                <p>Reliance for Heavy Industries</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjtablet"
            >
              <div className="prjcard">
                <h2>Downtown Al Arab Port Said project</h2>
                <p>Capital Consult</p>
              </div>
              <div className="prjcard">
                <h2>Mountain View</h2>
                <p>United Co.</p>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else {
        setSList(
          <div className="prj1flex" id="prjflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjdesktop"
            >
              <div className="prjcard">
                <h2>Dejoya 1, 2 & 3 Capital Administration</h2>
                <p>Taj Misr Co.</p>
              </div>

              <div className="prjcard">
                <h2>Xiaomi Factory, 6th of October</h2>
                <p>Etsal Co.</p>
              </div>
              <div className="prjcard">
                <h2>Benkel Mall, 5th Settlement</h2>
                <p>Benkel Co.</p>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjdesktop"
            >
              <div className="prjcard">
                <h2>Ain Sokhna Logistics Zone</h2>
                <p>Karama Co.</p>
              </div>

              <div className="prjcard">
                <h2>Safir Matrouh Hotel</h2>
                <p>Al Safa Contracting Co.</p>
              </div>

              <div className="prjcard">
                <h2>Mind House -District 5 - Katamia</h2>
                <p>Dar Elkahraba Co</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjdesktop"
            >
              <div className="prjcard">
                <h2>Damietta Slaughterhouse</h2>
                <p>Care Contracting Co.</p>
              </div>

              <div className="prjcard">
                <h2>Sia Villaggio Marina</h2>
                <p>Arab Developers Co.</p>
              </div>
              <div className="prjcard">
                <h2>Alfa Frost</h2>
                <p>Tech Groups Egypt</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjdesktop"
            >
              <div className="prjcard">
                <h2>Universal Factory</h2>
                <p>Shobaky Electric Group</p>
              </div>
              <div className="prjcard">
                <h2>Egypt Air Force Farm</h2>
                <p>Sinoma</p>
              </div>
              <div className="prjcard">
                <h2>New Valley Courts Complex</h2>
                <p>Maadi Co.</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjdesktop"
            >
              <div className="prjcard">
                <h2>Methode Electronics Egypt</h2>
                <p>El Nasr Free Zone</p>
              </div>
              <div className="prjcard">
                <h2>Ain Sokhna Cement Factory</h2>
                <p>Reliance for Heavy Industries</p>
              </div>
              <div className="prjcard">
                <h2>Downtown Al Arab Port Said project</h2>
                <p>Capital Consult</p>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="prjdesktop"
            >
              <div className="prjcard">
                <h2>Mountain View</h2>
                <p>United Co.</p>
              </div>
              <div className="prjcard hidden">
                <h2>Sia Villaggio Marina</h2>
                <p>Arab Developers Co.</p>
              </div>
              <div className="prjcard hidden">
                <h2>Sia Villaggio Marina</h2>
                <p>Arab Developers Co.</p>
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
    <div className="prj">
      <div className="prj1">
        <h1>Our Projects</h1>
        {ServicesList}
      </div>
    </div>
  );
};
