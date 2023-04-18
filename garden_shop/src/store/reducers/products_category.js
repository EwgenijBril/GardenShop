const defaultState = [];
let firstState = [];

const LOAD_PRODUCTS_CATEGORY = 'LOAD_PRODUCTS_CATEGORY';
const SORT_PRODUCTS_CATEGORY = 'SORT_PRODUCTS_CATEGORY';
const SEARCH_PRICE_PRODUCTS = 'SEARCH_PRICE_PRODUCTS ';


export const loadProductsCategory = payload => ({ type: LOAD_PRODUCTS_CATEGORY, payload });
export const sortProductsCategory = payload => ({ type: SORT_PRODUCTS_CATEGORY, payload });
export const searchPriceProducts = payload => ({ type: SEARCH_PRICE_PRODUCTS, payload });

export const productsCategoryReducer = (state = defaultState, action) => {
    if(action.type === LOAD_PRODUCTS_CATEGORY){
      firstState = action.payload;
      return action.payload
    } else if (action.type === SORT_PRODUCTS_CATEGORY) {
      if (action.payload === 'default'){
        return firstState
      } else if(action.payload === 'title') {
        return [...state].sort((a, b) => a.title.localeCompare(b.title))
      } else  if ( action.payload === 'price' ){
        return [...state].sort((a, b) => a.price - b.price)
      } else {
        return state
      }
    } else if (action.type === SEARCH_PRICE_PRODUCTS){
      // const { min_value, max_value } = action.payload;
      return [...state].map(el => {
        if (el.price >= action.payload.min_value && el.price <= action.payload.max_value){
          el.hide = false
        } else {
          el.hide = true
        }
        return el
      })
    } else {
      return state
    }
  }

