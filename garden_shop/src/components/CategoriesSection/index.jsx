import React from "react";
import CategoriesContainer from "../CategoriesContainer";
import s from "./index.module.css";

export default function CategoriesSection() {
  return (
    <section>
      <div className={["wrapper", s.section].join(" ")}>
        <h2>Catalog</h2>
        <CategoriesContainer />
      </div>
    </section>
  );
}
