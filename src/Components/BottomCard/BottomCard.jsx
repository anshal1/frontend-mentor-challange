import React from 'react';
import Cardholder from '../CardHolder/Cardholder';
import "./BottomCard.css";
import img1 from "../../images/image-gaming-growth.jpg";
import img2 from "../../images/image-retro-pcs.jpg";
import img3 from "../../images/image-top-laptops.jpg";
const BottomCard = () => {
  return (
    <>
    <div className="main_bottomCard">
        <Cardholder img={img1} index="01" heading="The Growth of Gaming" text="How the pandemic has sparked fresh opportunities."/>
        <Cardholder img={img2} index="02" heading="Reviving Retro PCs" text="What happens when old PCs are given modern upgrades?"/>
        <Cardholder img={img3} index="03" heading="Top 10 Laptops of 2022" text="Our best picks for various needs and budgets."/>
    </div>
    </>
  )
}

export default BottomCard
