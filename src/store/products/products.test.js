import reducer, { initialState } from './productsReducer';
import { setSelectedProduct, setSelectedProductQuantity } from './productsActions';
import { SET_SELECTED_PRODUCT, SET_SELECTED_PRODUCT_QUANTITY } from './productsTypes';

const selectedProductMock = {
  id: 0,
  img: '',
  price: 1.5,
  category: 'Chocolate',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

const selectedProductQuantityMock = 1;

describe('Products Reducer', () => {
  test('Should return default state', () => {
    const newState = reducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  test(SET_SELECTED_PRODUCT, () => {
    const newState = reducer(initialState, setSelectedProduct(selectedProductMock));
    expect(newState.selectedProduct).toStrictEqual(selectedProductMock);
  });

  test(SET_SELECTED_PRODUCT_QUANTITY, () => {
    const newState = reducer(initialState, setSelectedProductQuantity(selectedProductQuantityMock));
    expect(newState.selectedProductQuantity).toEqual(selectedProductQuantityMock);
  });
});
