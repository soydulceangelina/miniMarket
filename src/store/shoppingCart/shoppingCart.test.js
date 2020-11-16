import reducer, { initialState } from './shoppingCartReducer';
import { setShoppingCart } from './shoppingCartActions';
import { SET_SHOPPING_CART } from './shoppingCartTypes';

const productsInCartMock = [
  {
    qty: 1,
    product: {
      id: 0,
      img: '',
      price: 1.5,
      category: 'Chocolate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  },
];

describe('Products Reducer', () => {
  test('Should return default state', () => {
    const newState = reducer(initialState, {});
    expect(newState).toEqual(initialState);
  });

  test(SET_SHOPPING_CART, () => {
    const newState = reducer(initialState, setShoppingCart(productsInCartMock));
    expect(newState.productsInCart).toStrictEqual(productsInCartMock);
  });
});
