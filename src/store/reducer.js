import { combineReducers } from 'redux';

import productsReducer from './products/productsReducer';
import shoppingCartReducer from './shoppingCart/shoppingCartReducer';

export default combineReducers({
  products: productsReducer,
  shoppingCart: shoppingCartReducer,
});
