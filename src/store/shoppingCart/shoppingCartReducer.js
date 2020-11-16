import {
  SET_SHOPPING_CART,
} from './shoppingCartTypes';

const initialState = {
  productsInCart: localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOPPING_CART: {
      return {
        ...state,
        productsInCart: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
