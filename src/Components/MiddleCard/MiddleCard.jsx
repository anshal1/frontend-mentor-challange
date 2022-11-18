import React from "react";
import "./MiddleCard.css";
const MiddleCard = () => {
  return (
    <>
      <div className="main_middlecard">
        <div className="heading_middle_card">
          <h1>New</h1>
        </div>
        <div className="text_card">
          <div className="text_card_text">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <hr />
          <div className="text_card_text">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
          <hr />
          <div className="text_card_text">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleCard;
