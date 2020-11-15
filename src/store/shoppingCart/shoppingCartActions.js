import {
  ADD_TO_SHOPPING_CART,
} from './shoppingCartTypes';

export const addToShoppingCart = (payload) => ({
  type: ADD_TO_SHOPPING_CART,
  payload,
});
