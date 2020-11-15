export const totalToPaySelector = ({ shoppingCart }) => {
  const { productsInCart } = shoppingCart;
  return productsInCart.map(({ product, qty }) => product.price * qty).reduce((a, b) => a + b, 0);
};
