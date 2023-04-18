import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load_products } from "../../requests/products_req";
import SaleProductCard from "../../components/SaleProductCard";
import s from "./index.module.css";

export default function SaleProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(load_products);
  }, []);

  return (
    <section>
      <div className={["wrapper", s.products_page].join(" ")}>
        <h1>Sale</h1>
        <div className={s.products_cards}>
          {products.map((el) => (
            <SaleProductCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
