import {
  ADD_TO_SHOPPING_CART,
  SET_SHOPPING_CART,
} from './shoppingCartTypes';

export const addToShoppingCart = (payload) => ({
  type: ADD_TO_SHOPPING_CART,
  payload,
});

export const setShoppingCart = (payload) => ({
  type: SET_SHOPPING_CART,
  payload,
});
