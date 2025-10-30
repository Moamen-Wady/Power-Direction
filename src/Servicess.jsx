import { AnimationOnScroll } from "react-animation-on-scroll";
import "./styles/services.css";
import { useEffect, useState } from "react";

export default function Services() {
  const [ServicesList, setSList] = useState(<></>);

  useEffect(() => {
    function handleLayout() {
      let swidth = window.innerWidth;
      if (swidth <= 560) {
        setSList(
          <div className="srv1flex" id="srvflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm21.webp" alt="" />
                <span id="Distributerss">
                  <h3 id="Distributersh">Distributers</h3>
                  <p>
                    is the final stage in the delivery of electricity.
                    Electricity is carried from the transmission system to
                    individual consumers. Distribution substations connect to
                    the transmission system and lower the transmission voltage
                    to medium voltage ranging between 2 kV and 33 kV with the
                    use of transformers.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm23.webp" alt="" />
                <span id="RMUs">
                  <h3 id="RMUh">RMU</h3>
                  <p>
                    Ring Main Unit (RMU) is a compact, metal-enclosed switchgear
                    used for secondary distribution applications in medium
                    voltage networks, typically ranging from 11 kV to 36 kV. It
                    is designed for reliability, safety, and flexibility, making
                    it ideal for use in industrial, commercial, and utility
                    applications.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm22.webp" alt="" />
                <span id="Kioskss">
                  <h3 id="Kiosksh">Kiosks</h3>
                  <p>
                    separate constructions that can be used to store letious
                    electrical components, including switchboards, distribution
                    systems, and other devices.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm24.webp" alt="" />
                <span id="Transformerss">
                  <h3 id="Transformersh">Transformers</h3>
                  <p>
                    transformers are electrical devices used to step down or
                    step up voltage levels in the medium-voltage range,
                    typically between 1 kV and 36 kV. They are critical in
                    electrical distribution systems for industrial, commercial,
                    and utility applications, enabling the efficient transfer of
                    electrical power over medium distances while ensuring proper
                    voltage levels for downstream equipment or loads.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm25.webp" alt="" />
                <span id="Generatorss">
                  <h3 id="Generatorsh">Generators</h3>
                  <p>
                    generators are electrical devices designed to produce power
                    at voltages typically ranging from 400 V to 1,000 V,
                    suitable for direct use in low-voltage systems. These
                    generators are commonly used in residential, commercial, and
                    industrial applications to supply power during outages or in
                    off-grid scenarios.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm26.webp" alt="" />
                <span id="Busbars">
                  <h3 id="Busbarh">Busbar</h3>
                  <p>
                    A low-voltage busduct is an electrical distribution system
                    used to efficiently transmit electrical power in low-voltage
                    applications, typically under 1,000 volts. It is an
                    alternative to traditional cable-based wiring systems and is
                    commonly employed in industrial facilities, commercial
                    buildings, and power plants for its reliability,
                    flexibility, and ease of installation.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm27.webp" alt="" />
                <span id="LowVoltagePanelss">
                  <h3 id="LowVoltagePanelsh">Low Voltage Panels</h3>
                  <p>
                    Chint low-voltage panels are electrical distribution and
                    control panels designed by Chint Group and manufactured by
                    Lectrobar in Egypt, a global leader in electrical equipment
                    manufacturing. These panels are widely used in industrial,
                    commercial, and residential sectors to manage and distribute
                    electrical power efficiently and safely.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvmobile"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span id="CableTrayss">
                  <h3 id="CableTraysh">Cable Trays</h3>
                  <p>
                    Cable tray systems are structural support systems designed
                    to hold and route electrical cables in industrial,
                    commercial, and residential settings. They provide an
                    organized and safe method for managing electrical and
                    communication wiring, ensuring easy installation,
                    maintenance, and scalability.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else if (swidth <= 768) {
        setSList(
          <div className="srv1flex" id="srvflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvtablet"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm21.webp" alt="" />
                <span id="Distributerss">
                  <h3 id="Distributersh">Distributers</h3>
                  <p>
                    is the final stage in the delivery of electricity.
                    Electricity is carried from the transmission system to
                    individual consumers. Distribution substations connect to
                    the transmission system and lower the transmission voltage
                    to medium voltage ranging between 2 kV and 33 kV with the
                    use of transformers.
                  </p>
                </span>
              </div>
              <div className="srvcard">
                <img loading="lazy" src="/hm23.webp" alt="" />
                <span id="RMUs">
                  <h3 id="RMUh">RMU</h3>
                  <p>
                    Ring Main Unit (RMU) is a compact, metal-enclosed switchgear
                    used for secondary distribution applications in medium
                    voltage networks, typically ranging from 11 kV to 36 kV. It
                    is designed for reliability, safety, and flexibility, making
                    it ideal for use in industrial, commercial, and utility
                    applications.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvtablet"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm22.webp" alt="" />
                <span id="Kioskss">
                  <h3 id="Kiosksh">Kiosks</h3>
                  <p>
                    separate constructions that can be used to store letious
                    electrical components, including switchboards, distribution
                    systems, and other devices.
                  </p>
                </span>
              </div>
              <div className="srvcard">
                <img loading="lazy" src="/hm24.webp" alt="" />
                <span id="Transformerss">
                  <h3 id="Transformersh">Transformers</h3>
                  <p>
                    transformers are electrical devices used to step down or
                    step up voltage levels in the medium-voltage range,
                    typically between 1 kV and 36 kV. They are critical in
                    electrical distribution systems for industrial, commercial,
                    and utility applications, enabling the efficient transfer of
                    electrical power over medium distances while ensuring proper
                    voltage levels for downstream equipment or loads.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvtablet"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm25.webp" alt="" />
                <span id="Generatorss">
                  <h3 id="Generatorsh">Generators</h3>
                  <p>
                    generators are electrical devices designed to produce power
                    at voltages typically ranging from 400 V to 1,000 V,
                    suitable for direct use in low-voltage systems. These
                    generators are commonly used in residential, commercial, and
                    industrial applications to supply power during outages or in
                    off-grid scenarios.
                  </p>
                </span>
              </div>
              <div className="srvcard">
                <img loading="lazy" src="/hm26.webp" alt="" />
                <span id="Busbars">
                  <h3 id="Busbarh">Busbar</h3>
                  <p>
                    A low-voltage busduct is an electrical distribution system
                    used to efficiently transmit electrical power in low-voltage
                    applications, typically under 1,000 volts. It is an
                    alternative to traditional cable-based wiring systems and is
                    commonly employed in industrial facilities, commercial
                    buildings, and power plants for its reliability,
                    flexibility, and ease of installation.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvtablet"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm27.webp" alt="" />
                <span id="LowVoltagePanelss">
                  <h3 id="LowVoltagePanelsh">Low Voltage Panels</h3>
                  <p>
                    Chint low-voltage panels are electrical distribution and
                    control panels designed by Chint Group and manufactured by
                    Lectrobar in Egypt, a global leader in electrical equipment
                    manufacturing. These panels are widely used in industrial,
                    commercial, and residential sectors to manage and distribute
                    electrical power efficiently and safely.
                  </p>
                </span>
              </div>
              <div className="srvcard">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span id="CableTrayss">
                  <h3 id="CableTraysh">Cable Trays</h3>
                  <p>
                    Cable tray systems are structural support systems designed
                    to hold and route electrical cables in industrial,
                    commercial, and residential settings. They provide an
                    organized and safe method for managing electrical and
                    communication wiring, ensuring easy installation,
                    maintenance, and scalability.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
          </div>
        );
      } else {
        setSList(
          <div className="srv1flex" id="srvflx">
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvdesktop"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm21.webp" alt="" />
                <span id="Distributerss">
                  <h3 id="Distributersh">Distributers</h3>
                  <p>
                    is the final stage in the delivery of electricity.
                    Electricity is carried from the transmission system to
                    individual consumers. Distribution substations connect to
                    the transmission system and lower the transmission voltage
                    to medium voltage ranging between 2 kV and 33 kV with the
                    use of transformers.
                  </p>
                </span>
              </div>

              <div className="srvcard">
                <img loading="lazy" src="/hm23.webp" alt="" />
                <span id="RMUs">
                  <h3 id="RMUh">RMU</h3>
                  <p>
                    Ring Main Unit (RMU) is a compact, metal-enclosed switchgear
                    used for secondary distribution applications in medium
                    voltage networks, typically ranging from 11 kV to 36 kV. It
                    is designed for reliability, safety, and flexibility, making
                    it ideal for use in industrial, commercial, and utility
                    applications.
                  </p>
                </span>
              </div>
              <div className="srvcard">
                <img loading="lazy" src="/hm22.webp" alt="" />
                <span id="Kioskss">
                  <h3 id="Kiosksh">Kiosks</h3>
                  <p>
                    separate constructions that can be used to store letious
                    electrical components, including switchboards, distribution
                    systems, and other devices.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvdesktop"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm24.webp" alt="" />
                <span id="Transformerss">
                  <h3 id="Transformersh">Transformers</h3>
                  <p>
                    transformers are electrical devices used to step down or
                    step up voltage levels in the medium-voltage range,
                    typically between 1 kV and 36 kV. They are critical in
                    electrical distribution systems for industrial, commercial,
                    and utility applications, enabling the efficient transfer of
                    electrical power over medium distances while ensuring proper
                    voltage levels for downstream equipment or loads.
                  </p>
                </span>
              </div>

              <div className="srvcard">
                <img loading="lazy" src="/hm25.webp" alt="" />
                <span id="Generatorss">
                  <h3 id="Generatorsh">Generators</h3>
                  <p>
                    generators are electrical devices designed to produce power
                    at voltages typically ranging from 400 V to 1,000 V,
                    suitable for direct use in low-voltage systems. These
                    generators are commonly used in residential, commercial, and
                    industrial applications to supply power during outages or in
                    off-grid scenarios.
                  </p>
                </span>
              </div>

              <div className="srvcard">
                <img loading="lazy" src="/hm26.webp" alt="" />
                <span id="Busbars">
                  <h3 id="Busbarh">Busbar</h3>
                  <p>
                    A low-voltage busduct is an electrical distribution system
                    used to efficiently transmit electrical power in low-voltage
                    applications, typically under 1,000 volts. It is an
                    alternative to traditional cable-based wiring systems and is
                    commonly employed in industrial facilities, commercial
                    buildings, and power plants for its reliability,
                    flexibility, and ease of installation.
                  </p>
                </span>
              </div>
            </AnimationOnScroll>
            <AnimationOnScroll
              animateOnce={false}
              animateIn="animate__fadeIn"
              className="srvdesktop"
            >
              <div className="srvcard">
                <img loading="lazy" src="/hm27.webp" alt="" />
                <span id="LowVoltagePanelss">
                  <h3 id="LowVoltagePanelsh">Low Voltage Panels</h3>
                  <p>
                    Chint low-voltage panels are electrical distribution and
                    control panels designed by Chint Group and manufactured by
                    Lectrobar in Egypt, a global leader in electrical equipment
                    manufacturing. These panels are widely used in industrial,
                    commercial, and residential sectors to manage and distribute
                    electrical power efficiently and safely.
                  </p>
                </span>
              </div>

              <div className="srvcard">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span id="CableTrayss">
                  <h3 id="CableTraysh">Cable Trays</h3>
                  <p>
                    Cable tray systems are structural support systems designed
                    to hold and route electrical cables in industrial,
                    commercial, and residential settings. They provide an
                    organized and safe method for managing electrical and
                    communication wiring, ensuring easy installation,
                    maintenance, and scalability.
                  </p>
                </span>
              </div>
              <div className="srvcard hidden">
                <img loading="lazy" src="/hm28.webp" alt="" />
                <span>
                  <h3>Cable Trays</h3>
                  <p>
                    Cable tray systems are structural support systems designed
                    to hold and route electrical cables in industrial,
                    commercial, and residential settings. They provide an
                    organized and safe method for managing electrical and
                    communication wiring, ensuring easy installation,
                    maintenance, and scalability.
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
    return () => {
      window.screen.orientation.removeEventListener("change", handleLayout);
    };
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
    <div className="srv">
      <div className="srv1">
        <h3>
          Power Direction Specializes in The Supply, Installation and
          Maintenance of Essential Electrical Equipment. Such as:
        </h3>
        {ServicesList}
      </div>

      <AnimationOnScroll
        className="srv2"
        animateOnce={false}
        animateIn="animate__fadeIn"
      >
        <h3>
          In Addition, Our Range Includes a letiety of Local Panels
          (Distribution Panels, KWH Panels, Service Panels, etc...)
        </h3>
        <div className="srvcl">
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
