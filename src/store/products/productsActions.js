import {
  SET_SELECTED_PRODUCT,
  SET_SELECTED_PRODUCT_QUANTITY,
  CLEAN_SELECTED_PRODUCT,
} from './productsTypes';

export const setSelectedProduct = (payload) => ({
  type: SET_SELECTED_PRODUCT,
  payload,
});

export const setSelectedProductQuantity = (payload) => ({
  type: SET_SELECTED_PRODUCT_QUANTITY,
  payload,
});

export const cleanSelectedProduct = () => ({
  type: CLEAN_SELECTED_PRODUCT,
});
