import { all } from 'redux-saga/effects';
import shoppingCartSagas from './shoppingCart/shoppingCartSagas';

export default function* rootSaga() {
  yield all([
    shoppingCartSagas(),
  ]);
}
