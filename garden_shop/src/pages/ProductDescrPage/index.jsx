import React, { useEffect } from "react";
import { load_product } from "../../requests/product_item";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../store/reducers/cart";
import s from "./index.module.css";

export default function ProductDescrPage() {
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product_item);

  const { id } = useParams();

  useEffect(() => {
    dispatch(load_product(id));
  }, []);

  const { title, description, price, image, discont_price } = product;

  const add_to_card = () =>
    dispatch(addToCard({ id: +id, title, image, discont_price, price }));

  const discont = Math.round(((price - discont_price) / price) * 100);

  return (
    <section>
      <div className={["wrapper", s.product_descr_page].join(" ")}>
        <div className={s.left_block}>
          <h2>{title}</h2>
          <img
            src={`https://project-backend1-jw2u.onrender.com${image}`}
            //src={`http://localhost:3333${image}`}
            alt={title}
          />
        </div>
        <div className={s.right_block}>
          <div className={s.price_block}>
            <p>{discont_price}$</p>
            <p className={s.price}>{price}$</p>
            <p className={s.discont}>{discont}%</p>
          </div>
          <button onClick={add_to_card}>Add to cart</button>
          <div className={s.description_block}>
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
