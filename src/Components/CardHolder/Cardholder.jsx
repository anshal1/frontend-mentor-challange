import React from "react";
import "./CardHolder.css";
const Cardholder = (props) => {
  return (
    <>
      <div className="card_holder">
        <div className="card_img">
          <img src={props.img} alt="" />
        </div>
        <div className="card_text">
          <div className="index">
            <h1>{props.index}</h1>
          </div>
          <div className="card_heading">
            <h1>{props.heading}</h1>
          </div>
          <div className="card_paragraph">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardholder;
