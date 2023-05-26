import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { clearCart } from "../../store/reducers/cart";
import { Link } from "react-router-dom";
import CartCard from "../../components/CartCard";
import s from "./index.module.css";

export default function CartPage() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const total = cart
    .reduce((prev, { discont_price, count }) => prev + discont_price * count, 0)
    .toFixed(2);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const submit = (data) => {
    console.log(data);
    reset();
  };

  const phoneRegister = register("phone", {
    required: "* Mandatory field",
    pattern: {
      value: /^[\d\+][\d\(\)\ -]{4,14}\d$/,
      message: "* Not valid phone-forman",
    },
  });

  const clear_cart = () => dispatch(clearCart());

  const clear_form = (data) => {
    submit(data);
    if (!phoneRegister) return;
    clear_cart();
  };

  return (
    <section>
      <div className={["wrapper", s.cart_page].join(" ")}>
        <div className={s.title_block}>
          <h1>Shopping cart</h1>
          <Link to="/">
            <p>Back to the store</p>
          </Link>
        </div>
        <div className={s.info_block}>
          <div>
            {cart.map((el) => (
              <CartCard key={el.id} {...el} />
            ))}
          </div>

          <form className={s.right_block} onSubmit={handleSubmit(clear_form)}>
            <div className={s.titel}>
              <h3>Order details</h3>
              <div className={s.totals_count}>
                <h4>Total:</h4>
                <p>{total}$</p>
              </div>
            </div>
            <div className={s.letest_block}>
              <input
                type="number"
                name="phone"
                placeholder="+49"
                {...phoneRegister}
              />
              <button>order</button>
              {errors.phone && <p>{errors.phone?.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
