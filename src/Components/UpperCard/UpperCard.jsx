import React from "react";
import "./UpperCard.css";
import img1 from "../../images/image-web-3-mobile.jpg";
import img2 from "../../images/image-web-3-desktop.jpg";
const UpperCard = () => {
  return (
    <>
      <div className="main_upper_card">
        <div className="img_container">
          <img src={img1} id="mobile" alt="" />
        </div>
        <div className="text">
          <div className="heading">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="paragraph">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
          </div>
          <div className="button">
            <button id="btn">Read more</button>
          </div>
        </div>
      </div>
      {/* For desktop */}
      <div className="main_upper_card_desktop">
        <div className="img_container">
          <img src={img2} id="desktop" alt="" />
        </div>
        <div className="text">
          <div className="heading">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="button">
            <div className="paragraph">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
            </div>
            <button id="btn">Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperCard;
