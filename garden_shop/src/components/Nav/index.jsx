import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import logo from "./media/image 1.png";
import s from "./index.module.css";

export default function Nav() {
  const cart = useSelector((state) => state.cart);

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const totalSum = cart.reduce((total, amount) => total + amount.count, 0);

  return (
    <section className={s.section}>
      <nav className={["wrapper", s.nav].join(" ")}>
        <header className={s.header}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="categories">
            <button>Catalog</button>
          </Link>
        </header>
        <MenuOutlined className={s.menu_icon} onClick={toggleMenu} />
        <div className={`${s.nav_menu} ${menuActive ? s.active : ""}`}>
          <Link to="categories" onClick={closeMenu}>
            Categories
          </Link>
          <HashLink smooth to="/#coupon" onClick={closeMenu}>
            Coupon
          </HashLink>
          <Link to="products" onClick={closeMenu}>
            Sale
          </Link>
          <HashLink smooth to="#contacts" onClick={closeMenu}>
            Contacts
          </HashLink>
          <Link to="cart" onClick={closeMenu}>
            <div className={s.cart_block}>
              <p className={s.totalSum}>
                {totalSum > 0 && <span>{totalSum}</span>}
              </p>
              <ShoppingCartOutlined className={s.cart} />
            </div>
          </Link>
        </div>
      </nav>
    </section>
  );
}
