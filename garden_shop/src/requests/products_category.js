import { loadProductsCategory } from "../store/reducers/products_category"

export const load_products_category = id => {
    return dispatch => {
      fetch(`https://project-backend1-jw2u.onrender.com/categories/${id}`)
      // fetch(`http://localhost:3333/categories/${id}`)
      .then(resp => resp.json())
      .then(json => {
        const payload = json.map(el => ({
          ...el,
          hide: false
        }))
        dispatch(loadProductsCategory(payload))
      })
    }
  }


   