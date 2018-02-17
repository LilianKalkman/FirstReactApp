import React from 'react';

const ProductItem = () => {
  const products = ['Yogabroek', 'Shirt', 'Broekje']
  const productsGoed = products.map((product) => {
    return <li>{product}</li>
  });
  return(
    <li className="product-item">{productsGoed}</li>
  );
}

export default ProductItem;
