import Milo from '../../assets/milo.webp';
import Alqueria from '../../assets/alqueria.webp';
import Detodito from '../../assets/detodito.webp';
import Zucarita from '../../assets/zucarita.webp';

import {
  SET_SELECTED_PRODUCT,
  SET_SELECTED_PRODUCT_QUANTITY,
  CLEAN_SELECTED_PRODUCT,
} from './productsTypes';

const initialState = {
  products: [
    { id: 0, img: Milo },
    { id: 1, img: Alqueria },
    { id: 2, img: Detodito },
    { id: 3, img: Zucarita },
    { id: 4, img: Milo },
    { id: 5, img: Alqueria },
    { id: 6, img: Detodito },
    { id: 7, img: Zucarita },
    { id: 8, img: Zucarita },
    { id: 9, img: Milo },
    { id: 10, img: Alqueria },
    { id: 11, img: Detodito },
  ],
  selectedProduct: null,
  selectedProductQuantity: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: action.payload,
      };
    }
    case SET_SELECTED_PRODUCT_QUANTITY: {
      return {
        ...state,
        selectedProductQuantity: action.payload,
      };
    }
    case CLEAN_SELECTED_PRODUCT: {
      return {
        ...state,
        selectedProduct: initialState.selectedProduct,
        selectedProductQuantity: initialState.selectedProductQuantity,
      };
    }
    default: {
      return state;
    }
  }
};
