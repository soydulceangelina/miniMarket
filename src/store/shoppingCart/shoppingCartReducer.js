import {
  ADD_TO_SHOPPING_CART,
} from './shoppingCartTypes';

const initialState = {
  productsInCart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_SHOPPING_CART: {
      if (!state.productsInCart.length) {
        return {
          ...state,
          productsInCart: [action.payload],
        };
      }
      const productsInCartIds = state.productsInCart.map(({ product }) => product.id);
      if (productsInCartIds.includes(action.payload.product.id)) {
        return {
          ...state,
          productsInCart: state.productsInCart.map((product) => {
            if (product.product.id === action.payload.product.id) {
              return {
                ...product,
                qty: product.qty + action.payload.qty,
              };
            }
            return {
              ...product,
            };
          }),
        };
      }
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
