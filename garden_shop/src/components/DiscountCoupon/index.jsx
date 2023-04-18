import React from "react";
import { useForm } from "react-hook-form";
import discountImg from "./media/image 3.png";
import s from "./index.module.css";

export default function DiscountCoupon() {
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
      value: /^\+49\d{11}$/,
      message: "* Not valid phone-forman",
    },
  });

  return (
    <section className={s.section}>
      <div className={["wrapper", s.section_coupon].join(" ")} id="coupon">
        <img src={discountImg} alt="discountImg" />
        <form className={s.container_form} onSubmit={handleSubmit(submit)}>
          <div>
            <h2>Sale 5%</h2>
            <h3>for first order</h3>
          </div>
          <input
            type="number"
            name="phone"
            placeholder="+49"
            {...phoneRegister}
          />
          <button>Get coupon</button>
          <div className={s.error_message}>
            {errors.phone && <p>{errors.phone?.message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
