import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SaleProductCard from "../SaleProductCard";
import { load_products } from "../../requests/products_req";
import s from "./index.module.css";

export default function SalesProductsContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(load_products);
  }, []);

  return (
    <section>
      <div className={["wrapper", s.products_container].join(" ")}>
        {products
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((el) => (
            <SaleProductCard key={el.id} {...el} />
          ))}
      </div>
    </section>
  );
}
