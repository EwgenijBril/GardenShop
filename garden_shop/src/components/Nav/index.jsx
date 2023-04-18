import React, { useState } from "react";
import logo from "./media/image 1.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import s from "./index.module.css";

export default function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

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
            <ShoppingCartOutlined className={s.cart} />
          </Link>
        </div>
      </nav>
    </section>
  );
}
