import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductItem } from '../productItem/ProductItem';
import { productDetailsSelector } from '../../store/products/productsSelectors';
import { setSelectedProductQuantity } from '../../store/products/productsActions';
import { addToShoppingCart } from '../../store/shoppingCart/shoppingCartActions';
import styles from './ProductDetails.module.css';

export const ProductDetails = () => {
  const selectedProduct = useSelector(productDetailsSelector);
  const { selectedProductQuantity } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleQuantityClick = (qty) => () => dispatch(setSelectedProductQuantity(qty));
  const handleAddToShoppingCartClick = () => {
    dispatch(addToShoppingCart({
      product: selectedProduct,
      qty: selectedProductQuantity,
    }));
  };

  return (
    <div className={styles.cart}>
      <h4 className={styles.title}>Product</h4>
      <div className={styles.container}>
        <div>
          count
          {selectedProductQuantity}
        </div>
        {selectedProduct && (
          <ProductItem
            src={selectedProduct.img}
            alt="productDetail"
          />
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={handleQuantityClick(selectedProductQuantity - 1)}
          disabled={selectedProductQuantity === 1}
        >
          -
        </button>
        <button
          type="button"
          onClick={handleQuantityClick(selectedProductQuantity + 1)}
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAddToShoppingCartClick}
      >
        add to cart
      </button>
    </div>
  );
};
