import React from "react";
import SalesProductsContainer from "../SalesProductsContainer";
import s from "./index.module.css";

export default function SalesItems() {
  return (
    <section>
      <div className={["wrapper", s.section].join(" ")}>
        <h2>Sale</h2>
        <SalesProductsContainer />
      </div>
    </section>
  );
}
