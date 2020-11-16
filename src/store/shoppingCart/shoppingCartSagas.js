import { put, takeEvery, select } from 'redux-saga/effects';
import { setSelectedProduct, setSelectedProductQuantity } from '../products/productsActions';
import { setShoppingCart } from './shoppingCartActions';
import { ADD_TO_SHOPPING_CART, CLEAN_SHOPPING_CART } from './shoppingCartTypes';

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
  yield put(setSelectedProduct(null));
  yield put(setSelectedProductQuantity(0));
}

function* cleanShoppingCartSagas() {
  localStorage.removeItem('productsInCart');
  yield put(setShoppingCart([]));
}

export default function* shoppingCartSagas() {
  yield takeEvery(ADD_TO_SHOPPING_CART, addToShoppingCartSagas);
  yield takeEvery(CLEAN_SHOPPING_CART, cleanShoppingCartSagas);
}
