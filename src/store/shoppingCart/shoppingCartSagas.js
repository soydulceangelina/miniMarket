import { put, takeEvery, select } from 'redux-saga/effects';
import { setShoppingCart } from './shoppingCartActions';
import { ADD_TO_SHOPPING_CART } from './shoppingCartTypes';

function* addToShoppingCartSagas({ payload }) {
  const { productsInCart } = yield select((state) => state.shoppingCart);
  const productsInCartIds = productsInCart.map(({ product }) => product.id);
  let shoppingCart = [];

  if (!productsInCart.length) {
    shoppingCart = [payload];
  } else if (productsInCart.length && productsInCartIds.includes(payload.product.id)) {
    shoppingCart = productsInCart.map((product) => {
      if (product.product.id === payload.product.id) {
        return {
          ...product,
          qty: product.qty + payload.qty,
        };
      }
      return {
        ...product,
      };
    });
  } else {
    shoppingCart = [...productsInCart, payload];
  }
  localStorage.setItem('productsInCart', JSON.stringify(shoppingCart));
  yield put(setShoppingCart(shoppingCart));
}

export default function* shoppingCartSagas() {
  yield takeEvery(ADD_TO_SHOPPING_CART, addToShoppingCartSagas);
}
