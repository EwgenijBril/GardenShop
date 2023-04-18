import React from "react";
import saleImg from "./media/image 21.png";
import s from "./index.module.css";

export default function SalesBanner() {
  return (
    <section className={s.section}>
      <div className={["wrapper", s.section_container].join(" ")}>
        <div className={s.left_block}>
          <h1>Sale-Finale:</h1>
          <h2>Up to 70% discount</h2>
        </div>

        <div className={s.right_block}>
          <img src={saleImg} alt="saleImg" />
        </div>
      </div>
    </section>
  );
}
