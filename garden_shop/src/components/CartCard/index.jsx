import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  deleteCard,
} from "../../store/reducers/cart";
import s from "./index.module.css";

export default function CartCard({
  id,
  title,
  image,
  discont_price,
  price,
  count,
}) {
  const dispatch = useDispatch();

  const increment_count = () => dispatch(incrementCount(id));
  const decrement_count = () => dispatch(decrementCount(id));
  const delete_card = () => dispatch(deleteCard(id));

  return (
    <div className={s.cart_card}>
      <div className={s.left_block}>
        <img
          src={`https://project-backend1-jw2u.onrender.com${image}`}
          // src={`http://localhost:3333${image}`}
          alt={title}
        />
        <div className={s.info_block}>
          <p className={s.title}>{title}</p>
          <div className={s.card_button}>
            <button onClick={decrement_count}>-</button>
            <p>{count}</p>
            <button onClick={increment_count}>+</button>
          </div>
        </div>
      </div>
      <div className={s.rigth_block}>
        <p className={s.discont_price}>
          {discont_price}
          <span>$</span>
        </p>
        <p className={s.price}>{price}$</p>
        <RxCross2 className={s.cross} onClick={delete_card} />
      </div>
    </div>
  );
}
