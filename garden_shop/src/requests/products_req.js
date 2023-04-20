import { loadProducts } from "../store/reducers/products"

export const load_products = dispatch => {
    fetch('https://project-backend1-jw2u.onrender.com/products/all')
    //fetch('http://localhost:3333/products/all')
    .then(resp => resp.json())
    .then(json => dispatch(loadProducts(json)))
}