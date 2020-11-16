import {
  SET_SELECTED_PRODUCT,
  SET_SELECTED_PRODUCT_QUANTITY,
} from './productsTypes';

export const setSelectedProduct = (payload) => ({
  type: SET_SELECTED_PRODUCT,
  payload,
});

export const setSelectedProductQuantity = (payload) => ({
  type: SET_SELECTED_PRODUCT_QUANTITY,
  payload,
});
