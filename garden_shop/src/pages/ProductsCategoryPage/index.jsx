import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { load_products_category } from "../../requests/products_category";
import SaleProductCard from "../../components/SaleProductCard";
import {
  sortProductsCategory,
  searchPriceProducts,
} from "../../store/reducers/products_category";
import s from "./index.module.css";

export default function ProductsCategoryPage() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const products_category = useSelector((state) => state.products_category);

  useEffect(() => {
    dispatch(load_products_category(id));
  }, []);

  const sort_products_category = (event) =>
    dispatch(sortProductsCategory(event.target.value));

  const search = (event) => {
    event.preventDefault();
    const { min, max } = event.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
    dispatch(searchPriceProducts({ min_value, max_value }));
  };

  return (
    <section>
      <div className={["wrapper", s.common_block].join(" ")}>
        <div className={s.sorting}>
          <div>
            <span>Price:</span>
            <form className={s.search_form} onSubmit={search}>
              <input type="number" name="min" placeholder="from" />
              <input type="number" name="max" placeholder="to" />
              <button>Search</button>
            </form>
          </div>

          <div className={s.block_sorted}>
            <span>Sorted:</span>
            <select className={s.sort_select} onInput={sort_products_category}>
              <option value="default">default</option>
              <option value="title">title</option>
              <option value="price">price</option>
            </select>
          </div>
        </div>

        <div className={s.products_category_page}>
          {products_category
            .filter((el) => !el.hide)
            .map((el) => (
              <SaleProductCard key={el.id} {...el} />
            ))}
        </div>
      </div>
    </section>
  );
}
