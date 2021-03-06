import Milo from '../../assets/milo.webp';
import Alqueria from '../../assets/alqueria.webp';
import Detodito from '../../assets/detodito.webp';
import Zucarita from '../../assets/zucarita.webp';

import {
  SET_SELECTED_PRODUCT,
  SET_SELECTED_PRODUCT_QUANTITY,
} from './productsTypes';

export const initialState = {
  products: [
    {
      id: 0,
      img: Milo,
      price: 1500,
      category: 'Chocolate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 1,
      img: Alqueria,
      price: 1500,
      category: 'Milk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      img: Detodito,
      price: 1500,
      category: 'Snack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      img: Zucarita,
      price: 1500,
      category: 'Cereal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      img: Milo,
      price: 1500,
      category: 'Chocolate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 5,
      img: Alqueria,
      price: 1500,
      category: 'Milk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 6,
      img: Detodito,
      price: 1500,
      category: 'Snack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 7,
      img: Zucarita,
      price: 1500,
      category: 'Cereal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 8,
      img: Zucarita,
      price: 1500,
      category: 'Cereal',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 9,
      img: Milo,
      price: 1500,
      category: 'Chocolate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 10,
      img: Alqueria,
      price: 1500,
      category: 'Milk',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 11,
      img: Detodito,
      price: 1500,
      category: 'Snack',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
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
        selectedProductQuantity: 1,
      };
    }
    case SET_SELECTED_PRODUCT_QUANTITY: {
      return {
        ...state,
        selectedProductQuantity: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
