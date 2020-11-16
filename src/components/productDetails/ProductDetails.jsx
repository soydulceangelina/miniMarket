import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductItem } from '../productItem/ProductItem';
import { productDetailsSelector } from '../../store/products/productsSelectors';
import { setSelectedProductQuantity } from '../../store/products/productsActions';
import { addToShoppingCart } from '../../store/shoppingCart/shoppingCartActions';
import styles from './ProductDetails.module.scss';
import { toDollarCurrency } from '../../utils';
import { useDimensions } from '../../hooks';

export const ProductDetails = () => {
  const selectedProduct = useSelector(productDetailsSelector);
  const { selectedProductQuantity } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { width } = useDimensions();

  const handleQuantityClick = (qty) => () => dispatch(setSelectedProductQuantity(qty));
  const handleAddToShoppingCartClick = () => {
    dispatch(addToShoppingCart({
      product: selectedProduct,
      qty: selectedProductQuantity,
    }));
  };

  const getEmptyMessage = () => {
    if (width < 768) {
      return 'Please choose a product from above.';
    }
    return 'Please choose a product on the left.';
  };

  return (
    <div className={styles.cart}>
      <h4 className={styles.title}>Product</h4>
      <div className={styles.container}>
        {selectedProduct ? (
          <>
            <div className={styles.count}>
              {selectedProductQuantity}
            </div>
            <ProductItem
              src={selectedProduct.img}
              alt="productDetail"
            />
            <div className={styles.handle_container}>
              <div>
                {selectedProduct.category}
                {' '}
                •
                {' '}
                <span className={styles.currency}>
                  {toDollarCurrency(selectedProduct.price)}
                </span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleQuantityClick(selectedProductQuantity - 1)}
                  disabled={selectedProductQuantity === 1}
                  className={styles.handle_subtraction}
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={handleQuantityClick(selectedProductQuantity + 1)}
                  className={styles.handle_sum}
                >
                  +
                </button>
              </div>
            </div>
            <p className={styles.description}>{selectedProduct.description}</p>
            <button
              type="button"
              onClick={handleAddToShoppingCartClick}
              className={styles.addToCart}
            >
              add to cart
            </button>
          </>
        ) : <p>{getEmptyMessage()}</p>}
      </div>
    </div>
  );
};
