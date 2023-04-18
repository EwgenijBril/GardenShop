import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_categories } from "../../requests/categories_req";
import CategoryCard from "../CategoryCard";
import s from "./index.module.css";

export default function CategoriesContainer() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(load_categories);
  }, []);

  return (
    <div className={["wrapper", s.container].join(" ")}>
      {categories.slice(0, -1).map((el) => (
        <CategoryCard key={el.id} {...el} />
      ))}
    </div>
  );
}
