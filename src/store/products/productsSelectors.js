export const productDetailsSelector = ({ products }) => products.products
  .find((product) => product.id === products.selectedProduct);
