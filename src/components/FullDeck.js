// /* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Slide1 from "../assets/deck/1.png";
import Slide2 from "../assets/deck/2.png";
import Slide3 from "../assets/deck/3.png";
import Slide4 from "../assets/deck/4.png";
import Slide5 from "../assets/deck/5.png";
import Slide6 from "../assets/deck/6.png";
import Slide7 from "../assets/deck/7.png";
import Slide8 from "../assets/deck/8.png";
import Slide9 from "../assets/deck/9.png";
import Slide10 from "../assets/deck/10.png";
import Slide11 from "../assets/deck/11.png";
import Slide12 from "../assets/deck/12.png";

const SEL = "custom-section";
const SECTION_SEL = `.${SEL}`;
const pluginWrapper = () => {
  /*
   * require('./fullpage.fadingEffect.min'); // Optional. Required when using the "fadingEffect" extension.
   */
};

export const FullDeck = () => {
  const originalColors = ["#f2f2f2", "#4BBFC3", "#7BAABE"];

  // eslint-disable-next-line no-unused-vars
  const [sectionsColor, setSectionsColor] = React.useState([...originalColors]);

  const images = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10,
    Slide11,
    Slide12,
  ];

  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction });
  };

  const Menu = () => (
    <div
      className="menu"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    ></div>
  );
  const [width, setWidth] = React.useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  if (width <= 768) {
    return (
      <div
        style={{
          color: "white",
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: "0 2%",
        }}
      >
        {" "}
        Please rotate screen to landscape for better experience!
      </div>
    );
  }

  return (
    <div>
      <Menu />
      <ReactFullpage
        pluginWrapper={pluginWrapper}
        navigation
        anchors={[
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
        ]}
        sectionSelector={SECTION_SEL}
        onLeave={onLeave}
        sectionsColor={sectionsColor}
        render={(comp) => (
          <ReactFullpage.Wrapper>
            {images.map((pic, idx) => (
              <div key={idx} className={SEL}>
                <img
                  alt="ppt"
                  src={pic}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default FullDeck;
